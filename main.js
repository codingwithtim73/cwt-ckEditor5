import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import AutoImage from "@ckeditor/ckeditor5-image/src/autoimage";
import AutoLink from "@ckeditor/ckeditor5-link/src/autolink";
import Autosave from "@ckeditor/ckeditor5-autosave/src/autosave";
import Base64UploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import CloudServices from "@ckeditor/ckeditor5-cloud-services/src/cloudservices";
import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock";
import FindAndReplace from "@ckeditor/ckeditor5-find-and-replace/src/findandreplace";
import GeneralHtmlSupport from "@ckeditor/ckeditor5-html-support/src/generalhtmlsupport";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline";
import HtmlComment from "@ckeditor/ckeditor5-html-support/src/htmlcomment";
import HtmlEmbed from "@ckeditor/ckeditor5-html-embed/src/htmlembed";
import ImageBlock from "@ckeditor/ckeditor5-image/src/imageblock";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageInline from "@ckeditor/ckeditor5-image/src/imageinline";
import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert";
import ImageInsertViaUrl from "@ckeditor/ckeditor5-image/src/imageinsertviaurl";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageTextAlternative from "@ckeditor/ckeditor5-image/src/imagetextalternative";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Link from "@ckeditor/ckeditor5-link/src/link";
import LinkImage from "@ckeditor/ckeditor5-link/src/linkimage";
import PageBreak from "@ckeditor/ckeditor5-page-break/src/pagebreak";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import SelectAll from "@ckeditor/ckeditor5-select-all/src/selectall";
import ShowBlocks from "@ckeditor/ckeditor5-show-blocks/src/showblocks";
import SourceEditing from "@ckeditor/ckeditor5-source-editing/src/sourceediting";
import Style from "@ckeditor/ckeditor5-style/src/style";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableCaption from "@ckeditor/ckeditor5-table/src/tablecaption";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import TableColumnResize from "@ckeditor/ckeditor5-table/src/tablecolumnresize";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";
import Undo from "@ckeditor/ckeditor5-undo/src/undo";

// Updated plugin imports
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript";
import Superscript from "@ckeditor/ckeditor5-basic-styles/src/superscript";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor";
import SpecialCharacters from "@ckeditor/ckeditor5-special-characters/src/specialcharacters";
import Code from "@ckeditor/ckeditor5-basic-styles/src/code";

ClassicEditor.builtinPlugins = [
  Essentials,
  Alignment,
  Autoformat,
  AutoImage,
  AutoLink,
  Autosave,
  Base64UploadAdapter,
  BlockQuote,
  Bold,
  CloudServices,
  CodeBlock,
  FindAndReplace,
  GeneralHtmlSupport,
  Heading,
  HorizontalLine,
  HtmlComment,
  HtmlEmbed,
  ImageBlock,
  ImageCaption,
  ImageInline,
  ImageInsert,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageTextAlternative,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  LinkImage,
  PageBreak,
  Paragraph,
  SelectAll,
  ShowBlocks,
  SourceEditing,
  Style,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextTransformation,
  Undo,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  FontSize,
  FontColor,
  FontBackgroundColor,
  SpecialCharacters,
  Code,
];

ClassicEditor.defaultConfig = {
  toolbar: {
    items: [
      "heading",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "subscript",
      "superscript",
      "code",
      "link",
      "|",
      "bulletedList",
      "numberedList",
      "blockquote",
      "imageUpload",
      "insertTable",
      "mediaEmbed",
      "alignment",
      "fontSize",
      "fontColor",
      "fontBackgroundColor",
      "|",
      "codeBlock",
      "horizontalLine",
      "specialCharacters",
      "|",
      "removeFormat",
      "undo",
      "redo",
    ],
  },
  image: {
    toolbar: [
      "imageStyle:full",
      "imageStyle:side",
      "|",
      "imageTextAlternative",
    ],
  },
  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
  },
};

export default ClassicEditor;
