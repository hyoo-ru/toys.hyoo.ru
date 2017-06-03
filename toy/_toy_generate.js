#!/usr/bin/env node

const fs = require( 'fs' )

const proto = JSON.parse( fs.readFileSync( 'toy_proto.json' ) )
const data = {}
const sizes = [ "XS" , "S" , "M" , "L" , "XL" ]

for( let i = 0 ; i < 10000 ; ++i ) {
	const pid = i % proto.length
	const id = ( pid < 10 ? '0' : '' ) + pid + Math.random().toString( 16 ).substring( 2 , 8 )
	const p = proto[ pid ]
	data[ id ] = {
		title : p.title ,
		type : p.type ,
		price : Math.ceil( Math.random() * ( 5000 - 300 ) + 300 ) ,
		size : sizes[ Math.floor( Math.random() * sizes.length ) ] ,
		hue : Math.floor( Math.random() * 360 )
	}
}

fs.writeFileSync( 'toy_data.json' , JSON.stringify( data ) )
