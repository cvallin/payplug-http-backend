var scanner = require('i18next-scanner');
var vfs = require('vinyl-fs');
var options = {
    lngs: ['en', 'fr', 'arab', 'es', 'it'],
    ns: ['translation'],
    defaultLng: 'fr',
    defaultNs: 'translation',
    resource: {
        loadPath: 'public/translations/{{lng}}/{{ns}}.json',
        savePath: 'public/translations/{{lng}}/{{ns}}.json',
    },
    func: {
        list: ['t'],
    }
};
vfs.src(['src/**/*.js'])
    .pipe(scanner(options))
    .pipe(vfs.dest('.'));