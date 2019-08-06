/**
 * The trans function requires a key and if you have any replacement keys
 * you can give them as the second param that needs to be an object.
 *
 * @example trans( 'Hello message', { name: 'Gertjan', email: 'g.a.roke90@gmail.com' } )
 * @example Original translation string: "Hello my name is :name and this is my e-mailadres :email"
 * @example Returned translation string: "Hello my name is Gertjan and this is my e-mailadres g.a.roke90@gmail.com"
 *
 * @param string key
 * @param object replace
 *
 * @return string
 */
window.__ = function( key, replace ) {
    return key;
}

if ( typeof translations === 'string' ) {
    translations = JSON.parse( translations );
}

// Check if any translations are found.
if ( typeof translations === 'object' ) {
    // Replace the current __ function with a function that does something.
    window.__ = function( key, replace ) {
        // Check if the key exists in the translations json.
        if ( translations.hasOwnProperty( key ) ) {
            var string = translations[ key ];

            // Check if there are any replacements
            if ( typeof replace === 'object' && Object.keys( replace ).length > 0 ) {
                // Loop through them and replace all key value pairs.
                for ( var name in replace ) {
                    string = string.replace(
                        new RegExp( ':' + name, 'g' ),
                        replace[ name ]
                    );
                }
            }

            return string;
        }

        return key;
    }
}

var VueLaravelTranslations = {
    methods: {
        __: function ( key ) {
            return window.__( key, replace );
        }
    }
}

var ReactLaravelTranslations = {
    __: function( key, replace ) {
        return window.__( key, replace );
    }
}