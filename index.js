 const createIndexFile = () => {
    if  ( ! fs . existsSync ( 'build' ) )  {
        fs . mkdirSync ( 'construire' )
    }
    fs . writeFileSync ( 'build/index.html' ,  'Hello bonjour ' ) ;
    fs . writeFileSync ( 'build/index.html' ,  'Hello world ' ) ;
} ;

createIndexFile ( ) ;
