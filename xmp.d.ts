/// <reference path="./xmp.constants.d.ts" />
/// <reference path="./xmp.types.d.ts" />

/**
 * To load an external shared library into JavaScript, create a new ExternalObject object.
 */
declare class ExternalObject {
    /**
     * Load an external shared library.
     * @param filespec The specifier "lib:" is case sensitive, and serves as the marker for dynamic libraries. 
     * Concatenate this to the base name of the shared library, with or without an extension. 
     * ExtendScript appends a file extension if necessary, according to the operating system: .dll in Windows, .bundle or .framework in OSX, .so in UNIX.
     * @param args Any number of arguments to pass to the libraryÅfs initialization routine.
     */
    constructor(filespec: string, ...args: any[]);

    /**
     * Set to true to write status information to standard output (the JavaScript Console in the ExtendScript Toolkit).
     * Set to false to turn logging off. Default is false.
     */
    static log: boolean;

    /**
     * A set of alternate paths in which to search for the shared library files, a single string with multiple path specifications delimited by semicolons (;). Paths can be absolute or relative to the Folder.startup location.
     */
    static searchFolders: string;

    /**
     * The version of the library, as returned by ESGetVersion().
     */
    static version: number;

    /**
     * Reports whether a compiled C/C++ library can be found, but does not load it.
     * If logging is on, the paths searched are reported to the JavaScript Console in the ExtendScript Toolkit.
     * @param spec The file specification for the compiled library, with or without path information.
     * @returns true if the library is found, false otherwise.
     */
    static search(spec: string): boolean;

    /**
     * Explicitly shuts down the ExternalObject dynamic library wrapped by this instance.
     */
    terminate(): void;
}