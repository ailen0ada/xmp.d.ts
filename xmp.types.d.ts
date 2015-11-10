/// <reference path="./xmp.constants.d.ts" />
/// <reference path="./lib.d.ts" />

/**
 * This class corresponds to the Adobe XMP Toolkit's File Handler component, which provides convenient I/O access to the main, or document level, XMP for a file.
 */
declare class XMPFile {
	/**
	 * constructor.
	 * @param filePath A string containing the file path of a document.
	 * @param format The file format constant.
	 * @param openFlags The open options for the file. OPEN_FOR_READ, OPEN_FOR_UPDATE, OPEN_ONLY_XMP, OPEN_STRICTLY, OPEN_USE_SMART_HANDLER, OPEN_USE_PACKET_SCANNING, OPEN_LIMITED_SCANNING
	 */
    constructor(filePath: string, format: XMPConst, openFlags: XMPConst);
	
    /** The descriptive string for this version of the XMP Toolkit. */
    static version: string;
	
	/**
	 * Reports the supported features for the given file format.
	 * This function is available as a static method of the XMPFile class.
	 * @param format The file format constant.
	 * @returns Returns a logical OR of bit-flag constants, or 0 if the format is not handled. Constants are XMPConst.HANDLER_*.
	 */
    static getFormatInfo(format: number): number;

	/**
	 * Reports whether XMP metadata of a given size can be updated for this file. This is particularly important if the packet size is increased.
	 * @param xmpObj The XMP metadata as an {XMPMeta} object.
	 * @returns true if the give XMP can be put into this file.
	 */
    canPutXMP(xmpObj: XMPMeta): boolean;
	
	/**
	 * Reports whether XMP metadata of a given size can be updated for this file. This is particularly important if the packet size is increased.
	 * @param xmpPacket The XMP metadata as a string containing an XMP packet.
	 * @returns true if the give XMP can be put into this file.
	 */
    canPutXMP(xmpPacket: string): boolean;
	
	/**
	 * Reports whether XMP metadata of a given size can be updated for this file. This is particularly important if the packet size is increased.
	 * @param xmpBuffer The XMP metadata as an Array of Number containing raw XMP packet data. 
	 * @returns true if the give XMP can be put into this file.
	 */
    canPutXMP(xmpBuffer: number[]): boolean;
	
	/**
	 * Closes this open file, after writing to it as necessary; that is, if the file was opened for update, and if the XMP metadata was updated or injected.
	 * The options provided when the file was opened determine whether this function reconciles the XMP with other forms of metadata; that is, whether any legacy metadata is also updated to be consistent with the XMP metadata.
	 * @param closeFlags A close-option constant(CLOSE_UPDATE_SAFELY), or 0.
	 */
    closeFile(closeFlags?: XMPConst): void;
	
	/**
	 * Retrieves and parses the existing XMP metadata from this file. If the file format contains legacy metadata in a format that is recognized by the File Handler, the function creates an XMP packet containing the metadata.
	 * @returns {XMPMeta} object, or null if the files dows not contain XMP or convertible legacy metadata.
	 */
    getXMP(): XMPMeta;
	
	/**
	 * Retrieves the raw XMP packet from this file, along with information about the packet. The options with which the file was opened determine whether this function reconciles other forms of metadata with the XMP.
	 * @returns {XMPPacketInfo} object, or null if the files does not contain XMP metadata.
	 */
    getPacketInfo(): XMPPacketInfo;
	
	/**
	 * Retrieves basic information about this file.
	 * @returns {XMPFileInfo} object.
	 */
    getFileInfo(): XMPFileInfo;
	
	/**
	 * Supplies new XMP metadata for this file. The file is not actually written until closeFile() is called.
	 * The options provided when the file was opened determine whether that function reconciles the XMP with other forms of metadata; that is, whether any legacy metadata is also updated to be consistent with the XMP metadata.
	 * @param xmpObj The XMP metadata as an {XMPMeta} object.
	 */
    putXMP(xmpObj: XMPMeta): void;
	
	/**
	 * Supplies new XMP metadata for this file. The file is not actually written until closeFile() is called.
	 * The options provided when the file was opened determine whether that function reconciles the XMP with other forms of metadata; that is, whether any legacy metadata is also updated to be consistent with the XMP metadata.
	 * @param xmpPacket The XMP metadata as a String containing an XMP packet.
	 */
    putXMP(xmpPacket: string): void;
	
	/**
	 * Supplies new XMP metadata for this file. The file is not actually written until closeFile() is called.
	 * The options provided when the file was opened determine whether that function reconciles the XMP with other forms of metadata; that is, whether any legacy metadata is also updated to be consistent with the XMP metadata.
	 * @param xmpBuffer The XMP metadata as an Array of Number containing raw XMP packet data.
	 */
    putXMP(xmpBuffer: number[]): void;
}

/**
 * This object is returned by XMPFile.getFileInfo(). 
 * The read-only properties describe the file represented by the XMPFile object. 
 */
declare class XMPFileInfo {
    /** The absolute path of the file, in JavaScript notation. */
    filePath: string;
	
    /** One of the file-format constants. */
    format: XMPConst;
	
    /** The features that are supported for this format. A logical OR of these bit-flag constants:XMPConst.HANDLER_*. */
    handlerFlags: number;
	
    /** The options with which this file was opened. One of these constants: XMPConst.OPEN_*. */
    openFlags: XMPConst;
}

/**
 * Created by a call to XMPMeta.iterator(). Walks recursively through the properties and qualifiers of an XMPMeta object, and returns them as XMPProperty objects.
 */
declare class XMPIterator {
	/**
	 * Retrieves the next item in the metadata.
	 * @returns An {XMPProperty} object, or null if there are no more items.
	 */
    next(): XMPProperty;
	
	/**
	 * Skips the subtree below and the siblings of the current node on the subsequent call to next().
	 */
    skipSiblings(): void;
	
	/**
	 * Skips the subtree below the current node on the subsequent call to next().
	 */
    skipSubtree(): void;
}

/**
 * There is one static property on the class that provides XMP version information; there are no JavaScript properties in the instance.
 */
declare class XMPMeta {
    /** Creates an empty object. */
    constructor();
	
	/**
	 * @param packet A String containing an XML file or an XMP packet. 
	 */
    constructor(packet: string);
	
	/**
	 * @param buffer An Array of Number. The UTF-8 or UTF-16 encoded bytes of an XML file or an XMP packet. This array is the result of XMPMeta.serializeToArray().
	 */
    constructor(buffer: number[]);
	
    /** The descriptive string for this version of the XMP Toolkit. */
    static version: string;
	
	/**
	 * Creates and returns a human-readable string containing the list of registered aliases and their targets.
	 */
    static dumpAliases(): string;
	
	/**
	 * Creates and returns a human-readable string containing the list of registered namespace URIs and their associated prefixes.
	 */
    static dumpNamespaces(): string;
	
	/**
	 * Retrieves the prefix associated with a registered namespace URI.
	 * @returns The prefix string followed by a colon.
	 */
    static getNamespacePrefix(namespaceURI: XMPConst): string;
	
	/**
	 * Retrieves the registered namespace URI associated with a namespace prefix.
	 * @returns The URI string.
	 */
    static getNamespaceURI(namespacePrefix: string): string;
	
	/**
	 * Defines an alias mapping from one namespace and property to another.
	 * An alias can be a direct mapping where the alias and actual property have the same data type, or it can map a simple alias to an item in an array, either the first item, or the x-default item in an alternate-text array. 
	 * Multiple alias names can map to the same actual property, as long as the forms match. If the same alias and form exists, the call does nothing.
	 * @param aliasNS The alias namespace string.
	 * @param aliasProp The alias property, a simple name string.
	 * @param actualNS The namespace string of the aliased property.
	 * @param actualProp The aliased property, a simple name string.
	 * @param arrayForm  The array form for a simple alias to an array item, which controls how the array is created if it is set for the first time through the alias. One of these constants: XMPConst.ALIAS_*.
	 */
    static registerAlias(aliasNS: XMPConst, aliasProp: string, actualNS: XMPConst, actualProp: string, arrayForm: XMPConst): void;
	
	/**
	 * Registers a namespace with a prefix. If the suggested prefix is already in use, generates, registers, and returns a different prefix.
	 * @param namespaceURI The namespace URI string.
	 * @param suggestedPrefix The suggested namespace prefix string.
	 * @returns A string containing the actual registered prefix. This is the suggestedPrefix, unless that one is already assigned to another namespace.
	 */
    static registerNamespace(namespaceURI: XMPConst, suggestedPrefix: string): string;
	
	/**
	 * Retrieves information about the actual property to which an alias is mapped.
	 * @param schemaNS The alias namespace URI string.
	 * @param aliasProp The alias property string.
	 * @returns {XMPAliasInfo} object.
	 */
    static resolveAlias(schemaNS: XMPConst, aliasProp: string): XMPAliasInfo;
	
	/**
	 * Appends an item to an existing array, or creates a new array-type property if the named array does not exist.
	 * @param schemaNS The namespace URI string.
	 * @param arrayName The array-type property name string. Can be a general path expression. 
	 * @param itemOptions  Optional. A flag that describes the new item, if it is being created.
	 * @param itemValue The new item value string. Pass null for array items that do not have values.
	 * @param arrayOptions Optional. A flag that describes the array form. Must be provided if the array is being created; ignored if the array already exists.
	 */
    appendArrayItem(schemaNS: XMPConst, arrayName: string, itemOptions: XMPConst, itemValue: string, arrayOptions: XMPConst): void;

    /**
     * Reports the number of items in an array-type metadata property. 
	 * @param schemaNS The namespace URI string.
	 * @param arrayName The array-type property name string. Can be a general path expression. 
     * @returns The number of items. 
     */
    countArrayItems(schemaNS: XMPConst, arrayName: string): number;

    /**
     * Deletes the metadata tree that has the given array item as its root. 
	 * @param schemaNS The namespace URI string.
	 * @param arrayName The array-type property name string. Can be a general path expression. 
     * @param itemIndex Number. The 1-based position index of the item. Use XMPConst.ARRAY_LAST_ITEM to reference the last existing item in the array. 
     */
    deleteArrayItem(schemaNS: XMPConst, arrayName: string, itemIndex: number): void;

    /**
     * Deletes the metadata tree that has the given property as its root. If the property does not exist, does nothing.
     * @param schemaNS The namespace URI string.
     * @param propName The property name string. Can be a general path expression.
     */
    deleteProperty(schemaNS: XMPConst, propName: string): void;

    /**
     * Deletes the metadata tree that has the given structure field as its root.
     * @param schemaNS The namespace URI string.
     * @param structName The structure name string. Can be a general path expression. 
     * @param fieldNS The field type namespace string.
     * @param fieldName The field name string. Must be a simple XML name.
     */
    deleteStructField(schemaNS: XMPConst, structName: string, fieldNS: XMPConst, fieldName: string): void;

    /**
     * Deletes the metadata tree that has the given qualifier as its root. If the qualifier does not exist, does nothing.
     * @param schemaNS The namespace URI string.
     * @param structName The structure name string. Can be a general path expression. 
     * @param qualNS The URI string of the qualifier namespace.
     * @param qualName The qualifier name string. Must be a simple XML name.
     */
    deleteQualifier(schemaNS: XMPConst, structName: string, qualNS: string, qualName: string): void;

    /**
     * Reports whether an array item with a given index currently exists in an existing array in the metadata.
     * @param schemaNS The namespace URI string.
	 * @param arrayName The array-type property name string. Can be a general path expression. 
     * @param itemIndex Number. The 1-based position index of the item. Use XMPConst.ARRAY_LAST_ITEM to reference the last existing item in the array. 
     * @returns {true} if the array and item exist. 
     */
    doesArrayItemExist(schemaNS: XMPConst, arrayName: string, itemIndex: number): boolean;

    /**
     * Reports whether a property with a given name currently exists in the metadata.
     * @param schemaNS The namespace URI string.
     * @param propName The property name string. Can be a general path expression.
     * @returns {true} if the property exists.
     */
    doesPropertyExist(schemaNS: XMPConst, propName: string): boolean;

    /**
     * Reports whether a structure field with a given name currently exists in the metadata.
     * @param schemaNS The namespace URI string.
     * @param structName The structure name string. Can be a general path expression. 
     * @param fieldNS The field type namespace string.
     * @param fieldName The field name string. Must be a simple XML name.
     * @returns {true} if the structure and field exist. 
     */
    doesStructFieldExist(schemaNS: XMPConst, structName: string, fieldNS: XMPConst, fieldName: string): boolean;

    /**
     * Reports whether a qualifier with a given name currently exists for a given property.
     * @param schemaNS The namespace URI string.
     * @param structName The structure name string. Can be a general path expression. 
     * @param qualNS The URI string of the qualifier namespace.
     * @param qualName The qualifier name string. Must be a simple XML name.
     * @returns {true} if the property and qualifier exist. 
     */
    doesQualifierExist(schemaNS: XMPConst, structName: string, qualNS: string, qualName: string): boolean;

    /**
     * Creates and returns a string containing the metadata content of this object as RDF.
     * @returns {string} 
     */
    dumpObject(): string;

    /**
     * Retrieves an item from an array-type metadata property.
	 * @param schemaNS The namespace URI string.
	 * @param arrayName The array-type property name string. Can be a general path expression. 
     * @param itemIndex Number. The 1-based position index of the item. Use XMPConst.ARRAY_LAST_ITEM to reference the last existing item in the array. 
     * @returns {XMPProperty} object, or undefined if the property is not found.
     */
    getArrayItem(schemaNS: XMPConst, arrayName: string, itemIndex: number): XMPProperty;

    /**
     * Retrieves the text value for a specific language from an alternate-text array.
     * First tries to match the specific language.
     * If not found, tries to match the generic language, if specified.
     * If not found, gets the x-default item, if any. Otherwise, gets the first item.
     * @param schemaNS The namespace URI string.
     * @param altTextName The alternate-text array name string. Can be a general path expression.
     * @param genericLang The name of the generic language as an RFC 3066 primary subtag. Can be null or the empty string.
     * @param specificLang The name of the specific language as an RFC 3066 primary subtag; for example, en-US. Must be specified.
     * @returns {string} or undefined if no matching value is not found. 
     */
    getLocalizedText(schemaNS: XMPConst, altTextName: string, genericLang: string, specificLang: string): string;

    /**
     * Retrieves the value and options of a metadata property.
     * Use for top-level, simple properties, or after using the path-composition functions in the {XMPUtils} object.
     * @param schemaNS The namespace URI string.
     * @param propName The property name string. Can be a general path expression.
     * @returns {XMPProperty} object, or undefined if the property is not found.
     */
    getProperty(schemaNS: XMPConst, propName: string): XMPProperty;

    /**
     * Retrieves a field value from within a nested structure in metadata.
     * @param schemaNS The namespace URI string.
     * @param structName The structure name string. Can be a general path expression. 
     * @param fieldNS The field type namespace string.
     * @param fieldName The field name string. Must be a simple XML name.
     * @returns {XMPProperty} object, or undefined if the property is not found.
     */
    getStructField(schemaNS: XMPConst, structName: string, fieldNS: XMPConst, fieldName: string): XMPProperty;

    /**
     * Retrieves a qualifier attached to a metadata property.
     * @param schemaNS The namespace URI string.
     * @param structName The structure name string. Can be a general path expression. 
     * @param qualNS The URI string of the qualifier namespace.
     * @param qualName The qualifier name string. Must be a simple XML name.
     * @returns {XMPProperty} object, or undefined if the property is not found.
     */
    getQualifier(schemaNS: XMPConst, structName: string, qualNS: string, qualName: string): XMPProperty;

    /**
     * Inserts an item into an array, before an existing item. The index positions of all later items are incremented. The array must exist.
     * @param schemaNS The namespace URI string.
	 * @param arrayName The array-type property name string. Can be a general path expression. 
     * @param itemIndex Number. The 1-based position index of the item. Use XMPConst.ARRAY_LAST_ITEM to reference the last existing item in the array. 
     * @param itemValue The new item value. Pass null for array items that do not have values.
     * @param itemOptions Optional. A flag that describes the new item, if it is being created.
     */
    insertArrayItem(schemaNS: XMPConst, arrayName: string, itemIndex: number, itemValue: string, itemOptions: XMPConst): void;

    /**
     * Creates an iteration object that can iterate over the properties, arrays, and qualifiers within this metadata.
     * Specify options, a namespace, and a property to limit the range and granularity of the resulting items.
     * @param options The set of options that control how the iteration is performed, and how values are returned. A logical OR of these bit-flag constants: XMPConst.ITERATOR_*.
     * @param schemaNS The namespace URI string.
     * @param propName The name string of a property within which to iterate. Can be a general path expression. 
     * @returns {XMPIterator} object for this metadata object. 
     */
    iterator(options: XMPConst, schemaNS: XMPConst, propName: string): XMPIterator;

    /**
     * Serializes this XMP metadata into a string as RDF.
     * @param options  The set of options that control how the serialization is performed. The options must be logically consistent; if they conflict, the function throws an exception. A logical OR of these bit-flag constants: XMPConst.SERIALIZE_*.
     * @param padding Default is 0, meaning to use the appropriate amount of padding.
     * @param indent The string to use as an indent. Default is two spaces.
     * @param newline The newline character to use. Default is U+000A.
     * @param baseIndent The level of indentation of the outermost XML element. Default is 0.
     * @returns {string} serialized for this metadata object. 
     */
    serialize(options?: XMPConst, padding?: number, indent?: string, newline?: string, baseIndent?: number): string;

    /**
     * Serializes this XMP metadata into a string as RDF, then converts that to an array of one-byte numeric values, the UTF-8 or UTF-16 encoded characters.
     * @param options  The set of options that control how the serialization is performed. The options must be logically consistent; if they conflict, the function throws an exception. A logical OR of these bit-flag constants: XMPConst.SERIALIZE_*.
     * @param padding Default is 0, meaning to use the appropriate amount of padding.
     * @param indent The string to use as an indent. Default is two spaces.
     * @param newline The newline character to use. Default is U+000A.
     * @param baseIndent The level of indentation of the outermost XML element. Default is 0.
     * @returns Array of numbers.
     */
    serializeToArray(options?: XMPConst, padding?: number, indent?: string, newline?: string, baseIndent?: number): number[];

    /**
     * Replaces an item within an array, or appends an item. The array must exist. To create an item, appendArrayItem() and insertArrayItem() are preferred.
     * @param schemaNS The namespace URI string.
	 * @param arrayName The array-type property name string. Can be a general path expression. 
     * @param itemIndex Number. The 1-based position index of the item. Use XMPConst.ARRAY_LAST_ITEM to reference the last existing item in the array. 
     * @param itemValue The new item value. Pass null for array items that do not have values.
     * @param itemOptions Optional. A flag that describes the new item, if it is being created.
     */
    setArrayItem(schemaNS: XMPConst, arrayName: string, itemIndex: number, itemValue: string, itemOptions?: XMPConst): void;

    /**
     * Sets the text value for a specific language in an alternate-text array. Handles special cases for the x-default item.
     * @param schemaNS The namespace URI string.
     * @param altTextName The alternate-text array name string. Can be a general path expression.
     * @param genericLang The name of the generic language as an RFC 3066 primary subtag. Can be null or the empty string.
     * @param specificLang The name of the specific language as an RFC 3066 primary subtag; for example, de-CH. Must be specified.
     * @param itemValue The new string value.
     * @param setOptions Not used.
     */
    setLocalizedText(schemaNS: XMPConst, altTextName: string, genericLang: string, specificLang: string, itemValue: string, setOptions: any): void;

    /**
     * Sets the value of a field within a structure-type property, or creates a new field if the named field does not exist in the structure, or creates a new structure containing the named field if the named structure does not exist. 
     * @param schemaNS The namespace URI string.
     * @param structName The structure name string. Can be a general path expression. 
     * @param fieldNS The field type namespace string.
     * @param fieldName The field name string. Must be a simple XML name.
     * @param fieldValue The new field value string. Pass null for qualifiers that do not have values.
     * @param options Option flags that describe the qualifier. Used only if the qualifier is being created.
     */
    setStructField(schemaNS: XMPConst, structName: string, fieldNS: XMPConst, fieldName: string, fieldValue: string, options?: XMPConst): void;

    /**
     * Attaches a new qualifier to a metadata property. A qualifier can be added to a simple property, an array item, a struct field, or another qualifier.
     * @param schemaNS The namespace URI string.
     * @param structName The structure name string. Can be a general path expression. 
     * @param qualNS The URI string of the qualifier namespace.
     * @param qualName The qualifier name string. Must be a simple XML name.
     * @param qualValue The new qualifier value string. Pass null for qualifiers that do not have values.
     * @param options Option flags that describe the qualifier. Used only if the qualifier is being created.
     */
    setQualifier(schemaNS: XMPConst, structName: string, qualNS: string, qualName: string, qualValue: string, options?: XMPConst): void;

    /**
     * Retrieves the value and options of a metadata property.
     * Use for top-level, simple properties, or after using the path-composition functions in the {XMPUtils} object.
     * @param schemaNS The namespace URI string.
     * @param propName The property name string. Can be a general path expression.
     * @param propValue The new property value string. Pass null to create an array or non-leaf level structure property.
     * @param setOpetions The type of property to create, if the named property does not exist. Default is 0, a simple-valued property.
     * @param valueType The property data type. If supplied, the value is converted to this type.
     */
    setProperty(schemaNS: XMPConst, propName: string, propValue: string, setOptions?: XMPConst, valueType?: XMPConst): void;

    /**
     * Sorts the XMP contents alphabetically.
     */
    sort(): void;
}

/**
 * This object is returned by XMPFile.getPacketInfo(). The read-only properties describe the XMP packet for the file represented by the XMPFile object.
 */
declare class XMPPacketInfo {
    /** The character encoding in the packet, one of: 0:UTF8, 2:UTF-16,MSB-first(big), 3:UTF-16,LSB-first(little), 4:UTF32,MSB-first(big), 5:UTF32,LSB-first(little) */
    charForm: number;
    /** The length of the packet in bytes. */
    length: number;
    /** The byte-offset from the start of the file where the packet begins. */
    offset: number;
    /** The raw packet data. */
    packet: string;
    /** The packet's padding size in bytes, 0 if unknown. */
    padSize: number;
    /** If true, the packet is writeable. */
    writeable: boolean;
}

/**
 * This object is returned by various property accessor functions of the XMPMeta object, such as getProperty(). The read-only properties describe a metadata property.
 */
declare class XMPProperty {
    /** The language of the property value. This value is set by calls to getLocalizedText(), which assigns the language of the selected alternative text item, if an appropriate item is found. */
    locale: string;
    /** The namespace of the property. */
    namespace: string;
    /** A constant that describes the property type, 0 for a simple property. Constants are:XMPConst.PROP_* */
    options: number;
    /** The property path, including the property name. For a simple property, the entire path is the property name. */
    path: string;
    /** The value of the property, if any. Arrays and non-leaf levels of structures do not have values. */
    value: any;
}

/**
 * This class provides additional utility functions for the XMP Toolkit, layered upon the functionality of the XMPMeta object. It has only static functions, you cannot create an instance.
 */
declare class XMPUtils {
    /**
     * Copies properties from a source XMPMeta object and appends them to a destination XMPMeta object.
     * @param source The source {XMPMeta} object.
     * @param dest The destination {XMPMeta} object.
     * @param options Option flags that control the copying operation. XMPConst.APPEND_*
     */
    static appendProperties(source: XMPMeta, dest: XMPMeta, options: XMPConst): void;

    /**
     * Concatenates a set of array item values into a single string. The resulting string can be separated back out into array items using separateArrayItems().
     * @param xmpObj The XMPMeta object containing the array.
     * @param schemaNS The namespace URI string.
     * @param arrayName The array property name string. Can be a general path expression. Each item in the array must be a simple string value.
     * @param separator The string used to separate the items in the result string. Default is '; ', an ASCII semicolon and space (U+003B,U+0020).
     * @param quotes The character used to quote items that contain a separator. Default is '"', an ASCII double quote (U+0022).
     * @param options Option flag that controls the concatenation. XMPConst.SEPARATE_ALLOW_COMMAS or 0.
     * @returns The concatenated string.
     */
    static catenateArrayItems(xmpObj: XMPMeta, schemaNS: XMPConst, arrayName: string, separator?: string, quotes?: string, options?: XMPConst): string;

    /**
     * Creates and returns a string containing the path expression for an item in an array, using the registered prefix for the namespace, in the form: schemaNS:arrayName[itemIndex]
     * @param schemaNS The namespace URI string.
	 * @param arrayName The array-type property name string. Can be a general path expression. 
     * @param itemIndex Number. The 1-based position index of the item. Use XMPConst.ARRAY_LAST_ITEM to reference the last existing item in the array. 
     */
    composeArrayItemPath(schemaNS: XMPConst, arrayName: string, itemIndex: number): string;

    /**
     * Creates and returns a string containing the path expression to select an alternate item by a fieldÅfs value, using the registered prefixes for the namespaces, in the form: schemaNS:arrayName[fieldNS:fieldName=ÅffieldValueÅf] 
     * @param schemaNS The namespace URI string.
	 * @param arrayName The array-type property name string. Can be a general path expression. 
     * @param fieldNS The field namespace URI string.
     * @param fieldName The field name. Must be a simple XML name.
     * @param fieldValue The desired field value.
     */
    composeFieldSelector(schemaNS: XMPConst, arrayName: string, fieldNS: XMPConst, fieldName: string, fieldValue: any): string;

    /**
     * Creates and returns a string containing the path expression to select an alternate item in an alt text array by language, using the registered prefix for the namespace, in the form: schemaNS:arrayName[@xml:lang=ÅflangNameÅf]
     * Do not use this in place of getLocalizedText() or setLocalizedText().
     * Those functions provide extra logic to choose the appropriate language and maintain consistency with the x-default value.
     * This function provides a path expression for an explicit language, and only for that language.
     * @param schemaNS The namespace URI string.
	 * @param arrayName The array-type property name string. Can be a general path expression. 
     * @param locale The RFC3066 locale code string for the desired language.
     */
    composeLanguageSelector(schemaNS: XMPConst, arrayName: string, locale: string): string;

    /**
     * Creates and returns a string containing the path expression for a field in a structure, using the registered prefixes for the namespaces, in the form: schemaNS:structName/fieldNS:fieldName
     * @param schemaNS The namespace URI string.
     * @param structName The structure name string. Can be a general path expression. 
     * @param fieldNS The field type namespace string.
     * @param fieldName The field name string. Must be a simple XML name.
     */
    composeStructFieldPath(schemaNS: XMPConst, structName: string, fieldNS: XMPConst, fieldName: string): string;

    /**
     * Creates and returns a string containing the path expression for a qualifier attached to a property, using the registered prefix for the namespace, in the form: schemaNS:propName/?qualNS:qualName 
     * @param schemaNS The namespace URI string.
     * @param structName The structure name string. Can be a general path expression. 
     * @param qualNS The URI string of the qualifier namespace.
     * @param qualName The qualifier name string. Must be a simple XML name.
     */
    composeQualifierPath(schemaNS: XMPConst, propName: string, qualNS: XMPConst, qualName: string): string;

    /**
     * Copies properties in the specified subtree from a source XMPMeta object and adds them into a destination XMPMeta object.
     * @param source The source XMPMeta object.
     * @param dest The destination XMPMeta object.
     * @param sourceNS The source namespace URI string.
     * @param sourceRoot The property name string for the root location of the source subtree. Can be a general path expression.
     * @param destNS The destination namespace URI string.
     * @param destRoot The property name string for the root location of the destination subtree. Can be a general path expression. Default is the source root location.
     * @param options Option flags that control the copying operation. A logical OR of these bit-flag constants: XMPConst.APPEND_*
     */
    duplicateSubtree(source: XMPMeta, dest: XMPMeta, sourceNS: XMPConst, sourceRoot: string, destNS: XMPConst, destRoot?: string, options?: XMPConst): void;

    /**
     * Removes multiple properties from an XMPMeta object.
     * @param xmpObj The XMPMeta object.
     * @param schemaNS The namespace URI string.
     * @param propName The property name string. Can be a general path expression.
     * @param options Option flags that control the deletion operation. A logical OR of these bit-flag constants: XMPConst.REMOVE_*
     */
    removeProperties(xmpObj: XMPMeta, schemaNS?: XMPConst, propName?: string, options?: XMPConst): void;

    /**
     * Updates individual array item strings in the XMPMeta object from a concatenated string returned by catenateArrayItems(). 
     * Recognizes a large set of separator characters, including semicolons, commas, tab, return, linefeed, and multiple spaces.
     * @param xmpObj The XMPMeta object.
     * @param schemaNS The namespace URI string.
     * @param arrayName The array property name string. Can be a general path expression. Each item in the array must be a simple string value.
     * @param arrayOptions Option flags that control how the array property is updated from the separated string. A logical OR of these bit-flag constants: XMPConst.APPEND_*
     * @param concatString The string containing the concatenated array values, as returned by catenateArrayItems().
     */
    separateArrayItems(xmpObj: XMPMeta, schemaNS: XMPConst, arrayName: string, arrayOptions: XMPConst, concatString: string): void;
}

/**
 * This object is returned by XMPMeta.resolveAlias(). The read-only properties describe an XMP metadata alias.
 */
declare class XMPAliasInfo {
    /** A constant that describes the property type of the resolved alias, 0 for a simple property. */
    arrayForm: XMPConst;
	
    /** The name of the property to which the alias resolves. */
    name: string;
	
    /** The namespace of the property to which the alias resolves. */
    namespace: XMPConst;
}

/**
 * This class represents a date and time. Times include a time zone, and can have up to nanosecond resolution.
 */
declare class XMPDateTime {
    /** Creates an object containing a 0 date. */
    constructor();

    /**
     * Initializes the object with a JavaScript date.
     * @param date A JavaScript Date object. The time zone is set to the local operation-system time-zone value.
     * Times in the XMP Toolkit can have up to nanosecond resolution; however, when converting to or from a JavaScript Date value, time resolution is reduced to milliseconds.
     */
    constructor(date: Date);

    /**
     * Initializes the object with an ISO date.
     * @param iso8601Date A string containing a date-time in ISO 8601 format; for example: "2007-04-10T17:54:50+01:00" 
     */
    constructor(iso8601Date: string);
	
    /** The year, in the range [0000...9999]. */
    year: number;
	
    /** The month, in the range [1...12]. */
    month: number;
	
    /** The day, in the range [1...31]. */
    day: number;
	
    /** The hour, in the range [1...23]. */
    hour: number;
	
    /** The minute, in the range [1...59]. */
    minute: number;
	
    /** The second, in the range [1...59]. */
    second: number;
	
    /** The nanosecond, in the range [0...1e+9 -1]. */
    nanosecond: number;
	
	/** 
     * The time zone direction of offset. 
	 *  0: UTC 
	 *  -1: west 
	 *  1: east  
	 */
    tzSign: number;
	
    /** The time zone hour offset from the prime meridian, in the range [1...23]. */
    tzHour: number;
	
    /** The time zone minute offset from the prime meridian, in the range [1...59]. */
    tzMinute: number;

	/**
	 * Reports the time order of two date-time values.
	 * @param xmpDateTime Another XMPDateTime object.
	 * @returns 0 if the two values are the same, 1 if this date-time is later than the comparison value, -1 if this date-time is earlier than the comparison value.
	 */
    compareTo(xmpDateTime: XMPDateTime): number;
	
	/**
	 * Sets the time zone in this object to the local operating-system time zone, adjusting the time values from the previous time zone, if necessary.
	 */
    convertToLocalTime(): void;
	
	/**
	 * Sets the time zone in this object to UTC (coordinated universal time), adjusting the time values from the previous time zone, if necessary.
	 */
    convertToUTCTime(): void;
	
	/**
	 * Converts this date-time value to a JavaScript Date. The time zone is normalized (time zones are not supported in the JavaScript format), and the accuracy is reduced to milliseconds.
	 * @returns {Date} A JavaScript Date Object.
	 */
    getDate(): Date;
	
	/**
	 * Sets the time zone in this object to the current operation-system value, replacing any existing value. Does not affect other fields.
	 */
    setLocalTimeZone(): void;
}