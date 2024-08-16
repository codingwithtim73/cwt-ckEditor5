export default {
  build: {
    lib: {
      entry: "main.js",
      name: "CKEditor",
      formats: ["es"],
      fileName: () => `ckeditor.js`,
    },
    outDir: "dist",
  },
};
