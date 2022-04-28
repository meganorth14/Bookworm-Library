import { TiDeleteOutline } from 'react-icons/ti';
function Book({item, removeItem}){

    return(
        <tr>
            <td><img className="cover" alt={`Cover for ${item.title}`} src={`./${item.cover}`} /></td>
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td>{item.rental_length}</td>
            <td><button className="deletebtn" onClick={() => removeItem(item.book_id)}><TiDeleteOutline /></button></td>
        </tr>
    );
}

export default Book;