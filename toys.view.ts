namespace $.$mol {

	export class $my_toys_toy extends  $.$my_toys_toy {
		
		static protos() {
			return {
				'espander' : 'Эспандер "Могучее кольцо"' , 
				'fan' : 'Карманный вентилятор "Свежий бриз"' , 
				'fan2' : 'Карманный вентилятор "Быстрые лапки"' , 
				'blue-eli' : 'Фигурки "Голубые ели"' , 
				'cat-yeys' : 'Мешочек "Кошачьи глазки"' ,
				'lamp' : 'Ночная лампа "Водоворот"' ,
				'leg-massage' : 'Массажёр для стоп "Ёжик"' ,
				'pump' : 'Велосипедный насос "Ручной мастер"' ,
				'sleep-mask' : 'Маска для сна "Глубойкий сон"' ,
				'vibre-phone' : 'Виброколонка "Ко-ко-ко"' ,
			}
		}
		
		@ $mol_mem()
		proto() {
			return $mol_stub_select_random( Object.keys( $my_toys_toy.protos() ) )
		}
		
		@ $mol_mem()
		image( next = `-/my/toys/thumbs/${ this.proto() }.jpg` ) {
			return next
		}
		
		@ $mol_mem()
		title( next = $my_toys_toy.protos()[ this.proto() ] ) {
			return next
		}
		
		@ $mol_mem()
		popularity() {
			return Math.ceil( Math.random() * 100 )
		}
		
		@ $mol_mem()
		seed() {
			return Math.ceil( 1495357170 - Math.random() * 1000 )
		}
		
		@ $mol_mem()
		count() {
			return Math.ceil( $mol_state_time.now( Math.random() * 1000 ) / 1000 - this.seed()  )
		}
		
	}
	
	export class $my_toys extends $.$my_toys {
		
		toys_count() {
			return 10000
		}
		
		@ $mol_mem()
		toys() {
			return $mol_range_in({
				item : id => this.toy( String( id ) ) ,
				length : this.toys_count() ,
			}).valueOf() as $my_toys_toy[]
		}
		
		@ $mol_mem()
		popularity_average() {
			const toys = this.toys()
			
			const average = toys.reduce( ( average , toy )=> average + toy.popularity() , 0 ) / toys.length
			
			return average
		}
		
		toys_filtered() {
			const average = this.popularity_average()
			return this.toys().filter( toy => toy.popularity() >= average )
		}
		
		toy_cards() {
			return this.toys_filtered().map( toy => this.Toy_card( toy.id() ) )
		}
		
		toy_image( id : string ) {
			return this.toy( id ).image()
		}
		
		toy_title( id : string ) {
			return this.toy( id ).title()
		}
		
		toy_popularity( id : string ) {
			return this.toy( id ).popularity()
		}
		
		toy_count( id : string ) {
			return this.toy( id ).count()
		}
		
		toy_arg( id : string ) {
			return { toy : id }
		}
		
		toy_id( id : string ) {
			return id
		}
		
	}
	
}
