package bookwormlibrary.entities;

/**
 * Author class defines the unique identifier and name of each author
 */
public class Author {
    private int author_id;
    private String name;

    //constructors
    public Author(){
    }

    public Author(int id, String name){
        this.author_id = id;
        this.name = name;
    }

    //getters and setters
    public int getAuthor_id() {
        return author_id;
    }

    public void setAuthor_id(int author_id) {
        this.author_id = author_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    //toString
    @Override
    public String toString() {
        return "Author [author_id=" + author_id + ", name=" + name + "]";
    }


    //hashCode and equals
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + author_id;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Author other = (Author) obj;
        if (author_id != other.author_id)
            return false;
        if (name == null) {
            if (other.name != null)
                return false;
        } else if (!name.equals(other.name))
            return false;
        return true;
    }
}
