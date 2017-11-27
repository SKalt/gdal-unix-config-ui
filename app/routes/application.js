import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    const inclusionOptions = [
      "local", "libtool", "grib", "disable-rpath", "sqlite3", "mrf",
      "enable-fast-install", "jvm-lib", "xerces-lib", "mdb", "bindir",
      "silent", "sysconfdir", "xerces-inc", "gnm", "macosx-framework",
      "libexecdir", "srcdir", "podofo-extra-lib-for-test", "docdir",
      "cache-file", "pdfium-extra-lib-for-test", "dvidir", "no-create",
      "datarootdir", "teigha-plt", "boost-lib-path", "prefix", "host", "perl",
      "ld-shared", "xml2", "gnu-ld", "bsb", "cpp11", "localstatedir",
      "sharedstatedir", "libdir", "kakadu", "htmldir", "oci-include",
      "gdal-ver", "localedir", "oldincludedir", "infodir", "sbindir",
      "datadir", "build", "geos", "sfcgal", "includedir", "config-cache",
      "libkml-lib", "opencl-lib", "disable-option-checking", "libjson-c",
      "podofo-lib", "enable-shared", "expat-lib", "psdir", "sysroot", "pdfdir",
      "mandir", "pic", "enable-static", "version", "jpeg12", "php", "expat-inc",
      "help", "runstatedir", "oci-lib", "libkml-inc", "curl", "pdfium-lib",
      "teigha", "libiconv-prefix", "kea", "oci", "exec-prefix"
    ];
    const exclusionOptions = [...inclusionOptions,
      "libtool", "libiconv-prefix", "grib", "pam", "mrf", "jpeg12",
      "ld-shared", "bsb", "cpp11"
    ];
    // options that require flags...
    // etc.
    return Object.assign({inclusionOptions, exclusionOptions}, params);
  }
});