/**
 * This object contains the read-only constant definitions for use with the JavaScript XMP API.
 */
declare enum XMPConst {
	/**  The XML namespace for the Dublin Core schema, http://purl.org/dc/elements/1.1 */
	NS_DC,
	/** The XML namespace for the IPTC Core schema. */
	NS_IPTC_CORE,
	/** The XML namespace for RDF. */
	NS_RDF,
	/** The XML namespace for XML. */
	NS_XML,
	/** The XML namespace for the XMP basic schema. */
	NS_XMP,
	/** The XML namespace for the XMP copyright schema. */
	NS_XMP_RIGHTS,
	/** The XML namespace for the XMP digital asset management schema. */
	NS_XMP_MM,
	/** The XML namespace for the job management schema. */
	NS_XMP_BJ,
	/** The XML namespace for the XMP note schema. An Adobe private namespace; do not create new properties. */
	NS_XMP_NOTE,
	/**  The XML namespace for the PDF schema. */
	NS_PDF,
	/** The XML namespace for the PDFX schema. An Adobe private namespace; do not create new properties. */
	NS_PDFX,
	/** The XML namespace for the Adobe Photoshop custom schema. */
	NS_PHOTOSHOP,
	/** The XML namespace for the Adobe Photoshop Album custom schema. */
	NS_PS_ALBUM,
	/** The XML namespace for Adobe's EXIF schema. */
	NS_EXIF,
	/** The XML namespace for Adobe's EXIF auxiliary schema. */
	NS_EXIF_AUX,
	/** The XML namespace for Adobe's TIFF schema. */
	NS_TIFF,
	/** The XML namespace for the PNG schema. */
	NS_PNG,
	/** The XML namespace for the JPEG schema. */
	NS_JPEG,
	/** The XML namespace for the Flash small web format schema. */
	NS_SWF,
	/** The XML namespace for the JPK schema. */
	NS_JPK,
	/** The XML namespace for the Camera Raw schema. */
	NS_CAMERA_RAW,
	/** The XML namespace for the DM schema. */
	NS_DM,
	/** The XML namespace for the Adobe Stock Photos schema. */
	NS_ADOBE_STOCK_PHOTO,
	/** The XML namespace for the Microsoft advanced streaming format schema. */
	NS_ASF,
	/** The XML namespace for qualifiers of the xmp:Identifier property. */
	TYPE_IDENTIFIER_QUAL,
	/** The XML namespace for fields of the Dimensions type. */
	TYPE_DIMENSIONS,
	/** The XML namespace for the XMP text document schema. */
	TYPE_TEXT,
	/** The XML namespace for the XMP paged document schema. */
	TYPE_PAGEDFILE,
	/** The XML namespace for a structure containing the characteristics of a colorant (swatch) used in a document. */
	TYPE_GRAPHICS,
	/** The XML namespace for fields of a graphical image. Used for the Thumbnail type. */
	TYPE_IMAGE,
	/** The XML namespace for a structure containing the characteristics of a font used in a document. */
	TYPE_FONT,
	/** The XML namespace for fields of the ResourceEvent type. */
	TYPE_RESOURCE_EVENT,
	/** The XML namespace for fields of the ResourceRef type. */
	TYPE_RESOURCE_REF,
	/** The XML namespace for fields of the Version type. */
	TYPE_ST_VERSION,
	/** The XML namespace for fields of the JobRef type. */
	TYPE_ST_JOB,
	/** The XML namespace for the elements of a manifest array. */
	TYPE_MANIFEST_ITEM,
	/** The XML namespace for PDF subtypes. */
	TYPE_PDFA_SCHEMA,
	/** The XML namespace for PDF subtypes. */
	TYPE_PDFA_PROPERTY,
	/** The XML namespace for PDF subtypes. */
	TYPE_PDFA_TYPE,
	/** The XML namespace for PDF subtypes. */
	TYPE_PDFA_FIELD,
	/** The XML namespace for PDF subtypes. */
	TYPE_PDFA_ID,
	/** The XML namespace for PDF subtypes. */
	TYPE_PDFA_EXTENSION,
	/** Unknown file-format. */
	FILE_UNKNOWN,
	/** PDF */
	FILE_PDF,
	/** PS, general PostScript following DSC conventions */
	FILE_POSTSCRIPT,
	/** EPS, encapsulated PostScript  */
	FILE_EPS,
	/** JPEG */
	FILE_JPEG,
	/** JPX, JPEG 2000 file */
	FILE_JPEG2K,
	/** TIFF */
	FILE_TIFF,
	/** GIF */
	FILE_GIF,
	/** PNG */
	FILE_PNG,
	/** SWF, Flash file */
	FILE_SWF,
	/** FLA, Flash authoring file */
	FILE_FLA,
	/** FLV, Flash video file */
	FILE_FLV,
	/** MOV, Quicktime */
	FILE_MOV,
	/** AVI */
	FILE_AVI,
	/** CIN, Cineon */
	FILE_CIN,
	/** WAV */
	FILE_WAV,
	/** MP3 */
	FILE_MP3,
	/** SES, Audition session */
	FILE_SES,
	/** CEL, Audition loop */
	FILE_CEL,
	/** MPEG */
	FILE_MPEG,
	/** MP2 */
	FILE_MPEG2,
	/** MP4 */
	FILE_MPEG4,
	/** WMAV, Window Media Audio and Video */
	FILE_WMAV,
	/** AIFF */
	FILE_AIFF,
	/** HTML */
	FILE_HTML,
	/** XML */
	FILE_XML,
	/** TEXT */
	FILE_TEXT,
	/** PSD, Photoshop */
	FILE_PHOTOSHOP,
	/** AI, Illustrator */
	FILE_ILLUSTRATOR,
	/** INDD, Indesign */
	FILE_INDESIGN,
	/** AE, After Effects */
	FILE_AE_PROJECT,
	/** AET, After Effects Project Template */
	FILE_AE_PROJECT_TEMPLATE,
	/** FFX, After Effects Filter Preset file  */
	FILE_AE_FILTER_PRESET,
	/** NCOR, Encore DVD project file */
	FILE_ENCORE_PROJECT,
	/** PRPJ, Premiere Project file  */
	FILE_PREMIERE_PROJECT,
	/** PRTL, Premiere Title file */
	FILE_PREMIERE_TITLE,
	/** A direct mapping. It can be simple-to-simple, array-to-array, or structure-to-structure. */
	ALIAS_TO_SIMPLE_PROP,
	/** The actual property is an unordered array; the alias is to the first element. */
	ALIAS_TO_ARRAY,
	/** The actual property is an ordered array; the alias is to the first element. */
	ALIAS_TO_ORDERED_ARRAY,
	/** The actual property is an alternate array; the alias is to the first element. */
	ALIAS_TO_ALT_ARRAY,
	/** The actual property is an alternate text array; the alias is to the x-default element. */
	ALIAS_TO_ALT_TEXT,
	/** Open for read-only access. */
	OPEN_FOR_READ,
	/** Open for reading and writing. */
	OPEN_FOR_UPDATE,
	/** Only the XMP is wanted, allows space/time optimizations. */
	OPEN_ONLY_XMP,
	/** Be strict about locating XMP and reconciling with other forms. */
	OPEN_STRICTLY,
	/** Require the use of a smart handler. No packet scanning is performed. */
	OPEN_USE_SMART_HANDLER,
	/** Force packet scanning, do not use a smart handler. */
	OPEN_USE_PACKET_SCANNING,
	/** Only packet-scan files known to need scanning. */
	OPEN_LIMITED_SCANNING,
	/** Can inject first-time XMP into an existing file. */
	HANDLER_CAN_INJECT_XMP,
	/** Can expand XMP or other metadata in an existing file. */
	HANDLER_CAN_EXPAND,
	/** Can copy one file to another, writing new metadata. */
	HANDLER_CAN_REWRITE,
	/** Can expand, but prefers in-place update. */
	HANDLER_PPEFERS_IN_PLACE,
	/** Supports reconciliation between XMP and other forms. */
	HANDLER_CAN_RECONCIL,
	/** Allows access to just the XMP, ignoring other forms. */
	HANDLER_ALLOWS_ONLY_XMP,
	/** File handler returns raw XMP packet information. */
	HANDLER_RETURNS_RAW_PACKETS,
	/** File handler returns native thumbnail. */
	HANDLER_RETURNS_TNAIL,
	/** File handler does the file open and close. */
	HANDLER_OWNS_FILE,
	/** File handler allows crash-safe file updates. */
	HANDLER_ALLOWS_SAFE_UPDATE,
	/** File format needs XMP packet to be read-only. */
	HANDLER_NEEDS_READONLY_PACKET,
	/** File handler uses a sidecar file for the XMP. */
	HANDLER_USES_SIDECAR_XMP,
	/** Write into a temporary file then swap for crash safety. */
    CLOSE_UPDATE_SAFELY,
    /** Item order is significant. Implies XMPConst.PROP_IS_ARRAY. */
    ARRAY_IS_ORDERED,
    /** Items are mutually exclusive alternates. Implies XMPConst.PROP_IS_ARRAY and XMPConst.ARRAY_IS_ORDERED. */
    ARRAY_IS_ALTERNATIVE,
    /** The item is an array (of type alt, bag, or seq). */
    PROP_IS_ARRAY,
    /** The item is a structure with nested fields. */
    PROP_IS_STRUCT,
    /** Use in XMPMeta.delete/getArrayItem() to reference the last existing item in the array.  */
    ARRAY_LAST_ITEM,
    /** Limit iteration to immediate children of the root property. By default, iterates into subtrees. */
    ITERATOR_JUST_CHILDREN,
    /** Limit iteration to leaf nodes. By default, iterates into all nodes of a subtree. */
    ITERATOR_JUST_LEAFNODES,
    /** Return only the leaf part of the path. By default, returns a full path. */
    ITERATOR_JUST_LEAFNAMES,
    /** Include aliases. By default, considers only actual properties. */
    ITERATOR_INCLUDE_ALIASES,
    /** Omit qualifiers from iteration. */
    ITERATOR_OMIT_QUALIFIERS,
    /** Do not include an XML packet wrapper. */
    SERIALIZE_OMIT_PACKET_WRAPPER,
    /** Create a read-only XML packet wrapper. */
    SERIALIZE_READ_ONLY_PACKET,
    /** Use a highly compact RDF syntax and layout. */
    SERIALIZE_USE_COMPACT_FORMAT,
    /** Serialize a plain XMP (not currently supported). */
    SERIALIZE_USE_PLAIN_XMP,
    /** Include typical space for a JPEG thumbnail in the padding if no xmp:Thumbnail property is present. */
    SERIALIZE_INCLUDE_THUMBNAIL_PAD,
    /** Compute padding to meet the overall packet length provided by the padding parameter. Throws an exception if the unpadded packet exceeds this length. */
    SERIALIZE_EXACT_PACKET_LENGTH,
    /** Include XML comments for aliases. */
    SERIALIZE_WRITE_ALIAS_COMMENTS,
    /** Use in XMPMeta.setProperty(). */
    STRING,
    /** Use in XMPMeta.setProperty(). */
    INTEGER,
    /** Use in XMPMeta.setProperty(). */
    NUMBER,
    /** Use in XMPMeta.setProperty(). */
    BOOLEAN,
    /** Use in XMPMeta.setProperty(). */
    XMPDATE,
    /** Include both internal and external properties. By default, copies only external properties. This applies only to top-level properties. */
    APPEND_ALL_PROPERTIES,
    /** Replace the values of existing properties with the value from the source object. By default, existing values are retained. This applies to properties at all levels of hierarchy. */
    APPEND_REPLACE_OLD_VALUES,
    /** Delete properties if the new value is empty. */
    APPEND_DELETE_EMPTY_VALUES,
    /** Allow commas in item values (such as "LastName, FirstName"). This option must be set the same way in this function and in separateArrayItems() to reconstruct the items correctly. */
    SEPARATE_ALLOW_COMMAS,
    /** Remove internal and external properties. By default, removes only external properties. Applies only to top-level properties. */
    REMOVE_ALL_PROPERTIES,
    /** Remove aliases defined in the namespace. If the property name is supplied, removes it regardless of this option. */
    REMOVE_INCLUDE_ALIASES
}