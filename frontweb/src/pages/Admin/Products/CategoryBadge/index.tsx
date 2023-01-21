
import './styles.css'

type Props = {
    name: string;
}


const CategoryBadge = ({name} : Props) => {

    return (
        <div className="category-badge-contianer">{name}</div>
    );
}

export default CategoryBadge;