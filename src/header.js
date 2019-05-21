import React from 'react'


const Header =(props)=> {
    return(
        
        <div>
            Prueba de Header
            <select
            onChange = {props.handelChangeIdioma}
            >
            <option value="Esp">Esp</option>
			<option value="Eng">Eng</option>
            </select>
            <p>{props.idioma}</p>
        </div>
    )

}

export default Header

                        // <select value={book.shelf ? book.shelf : 'none' } onChange={this.handleBookUpdate}>
						// 		<option value="move" disabled>
						// 			Move to...
						// 		</option>
						// 		<option value="currentlyReading">Currently Reading</option>
						// 		<option value="wantToRead">Want to Read</option>
						// 		<option value="read">Read</option>
						// 		<option value="none">None</option>
						// 	</select>
