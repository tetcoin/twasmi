initSidebarItems({"enum":[["BlockType","Block type which is basically `ValueType` + NoResult (to define blocks that have no return type)"],["Error","Deserialization/serialization error"],["External","External to local binding."],["ImportCountType","Type of the import entry to count"],["Instruction","Instruction."],["Internal","Internal reference of the exported entry."],["RelocationEntry","Relocation entry."],["Section","Section in the WebAssembly module."],["TableElementType","Table element type."],["Type","Type definition in types section. Currently can be only of the function type."],["ValueType","Value type."]],"fn":[["deserialize_buffer","Deserialize deserializable type from buffer."],["deserialize_file","Deserialize module from the file."],["peek_size","Returns size of the module in the provided stream."],["serialize","Create buffer with serialized value."],["serialize_to_file","Serialize module to the file"]],"mod":[["opcodes",""]],"struct":[["BrTableData",""],["CodeSection","Section with function bodies of the module."],["CountedList","List for reading sequence of elements typed `T`, given they are preceded by length (serialized as VarUint32)."],["CountedListWriter","Helper struct to write series of `T` preceded by the length of the sequence serialized as VarUint32."],["CountedWriter","Helper struct to write payload which is preceded by it's own length in bytes."],["CustomSection","Custom section."],["DataSection","Data entries definitions."],["DataSegment","Data segment definition."],["ElementSection","Element entries section."],["ElementSegment","Entry in the element section."],["ExportEntry","Export entry."],["ExportSection","List of exports definition."],["Func","Function signature (type reference)"],["FuncBody","Function body definition."],["FunctionNameSubsection","The names of the functions in this module."],["FunctionSection","Section with function signatures definition."],["FunctionType","Function signature type."],["GlobalEntry","Global entry in the module."],["GlobalSection","Globals definition section."],["GlobalType","Global definition struct"],["ImportEntry","Import entry."],["ImportSection","Section of the imports definition."],["IndexMap","A map from non-contiguous `u32` keys to values of type `T`, which is serialized and deserialized ascending order of the keys. Normally used for relative dense maps with occasional \"holes\", and stored as an array."],["InitExpr","Initialization expression."],["Instructions","List of instructions (usually inside a block section)."],["Local","Local definition inside the function body."],["LocalNameSubsection","The names of the local variables in this module's functions."],["MemorySection","Section with table definition (currently only one entry is allowed)."],["MemoryType","Memory entry."],["Module","WebAssembly module"],["ModuleNameSubsection","The name of this module."],["NameSection","Debug name information."],["RelocSection","Relocation information."],["ResizableLimits","Memory and table limits."],["TableSection","Section with table definition (currently only one is allowed)."],["TableType","Table entry"],["TypeSection","Section with type declarations."],["Uint32","32-bit unsigned integer, encoded in little endian."],["Uint64","64-bit unsigned integer, encoded in little endian."],["Uint8","8-bit unsigned integer, NOT encoded in LEB128; it's just a single byte."],["Unparsed","Unparsed part of the module/section."],["VarInt32","32-bit signed integer, encoded in LEB128 (can be 1-5 bytes length)."],["VarInt64","64-bit signed integer, encoded in LEB128 (can be 1-9 bytes length)."],["VarInt7","7-bit signed integer, encoded in LEB128 (always 1 byte length)"],["VarUint1","VarUint1, 1-bit value (0/1)."],["VarUint32","Unsigned variable-length integer, limited to 32 bits, represented by at most 5 bytes that may contain padding 0x80 bytes."],["VarUint64","Unsigned variable-length integer, limited to 64 bits, represented by at most 9 bytes that may contain padding 0x80 bytes."],["VarUint7","7-bit unsigned integer, encoded in LEB128 (always 1 byte length)."]],"trait":[["Deserialize","Deserialization from serial i/o."],["Serialize","Serialization to serial i/o. Takes self by value to consume less memory (tetsy-wasm IR is being partially freed by filling the result buffer)."]],"type":[["NameMap","A map from indices to names."]]});