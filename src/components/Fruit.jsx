export default function Fruit({fruitInfo, onClick}) {
    // state

    // 2. manipulation de la copie du state
    
    // affichage (render)
    return (
    <li>
        {fruitInfo.nom} <button onClick={onClick}>X</button>
    </li>
    );
}