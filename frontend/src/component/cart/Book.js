import { TiDeleteOutline } from 'react-icons/ti';
function Book({item, removeItem}){

    return(
        <tr>
            <td><img className="cover" alt={`Cover for ${item.title}`} src={`./${item.cover}`} /></td>
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td>{item.rental_length}</td>
            <td><button id="delete" type="button" className="deletebtn" onClick={removeItem}><TiDeleteOutline /></button></td>
        </tr>
    );
}

export default Book;