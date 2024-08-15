export default {
  build: {
    lib: {
      entry: "main.js",
      name: "CKEditor",
      fileName: (format) => `ckeditor.${format}.js`,
    },
    outDir: "dist",
  },
};
