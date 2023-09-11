import "./Color.css"

export default function Color({ hex, name }) {
  console.log("box: ", hex, name)
  return (
    <div
      className='color-square' style={{ backgroundColor: hex }}
    >
      <h2 className="color-name">{name}</h2>
    </div>
  )
}
