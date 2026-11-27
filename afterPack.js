// Scrive icona e informazioni nell'exe senza usare Wine (resedit è puro JavaScript).
const fs = require('fs');
const path = require('path');
const ResEdit = require('resedit');

exports.default = async function (context) {
  if (context.electronPlatformName !== 'win32') return;
  const exePath = path.join(context.appOutDir, context.packager.appInfo.productFilename + '.exe');
  const exe = ResEdit.NtExecutable.from(fs.readFileSync(exePath));
  const res = ResEdit.NtExecutableResource.from(exe);

  const iconFile = ResEdit.Data.IconFile.from(fs.readFileSync(path.join(__dirname, 'build', 'icon.ico')));
  const groups = ResEdit.Resource.IconGroupEntry.fromEntries(res.entries);
  groups.forEach((g) => {
    ResEdit.Resource.IconGroupEntry.replaceIconsForResource(
      res.entries, g.id, g.lang, iconFile.icons.map((i) => i.data)
    );
  });

  const infos = ResEdit.Resource.VersionInfo.fromEntries(res.entries);
  if (infos.length) {
    const vi = infos[0];
    vi.setFileVersion(1, 0, 0, 0);
    vi.setProductVersion(1, 0, 0, 0);
    vi.setStringValues(
      { lang: 1033, codepage: 1200 },
      {
        FileDescription: 'Futura Calendar',
        ProductName: 'Futura Calendar',
        InternalName: 'Futura Calendar',
        OriginalFilename: 'Futura Calendar.exe',
        CompanyName: 'Futura',
        LegalCopyright: 'Futura',
      }
    );
    vi.outputToResourceEntries(res.entries);
  }
  res.outputResource(exe);
  fs.writeFileSync(exePath, Buffer.from(exe.generate()));
  console.log('  • icona e info scritte nell\'exe (resedit)');
};
