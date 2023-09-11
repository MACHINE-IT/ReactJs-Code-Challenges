import Color from './Color'



export default function ColorRenderer() {

  const colors = [{
    hex: '#91A6FF',
    name: 'Cornflower Blue'
  },
  {
    hex: '#FF88DC',
    name: 'Persian Pink'
  },
  {
    hex: '#80FF72',
    name: 'Screamin Green'
  },
  {
    hex: '#FF5154',
    name: 'Tart Orange'
  }]

  return (
    <>
      <h2>
        Use the Color component to render each
        item in the colors array on the page!
      </h2>
      <div className="color-box">
        {
          colors.map((color) =>
          (
            <Color key={color.hex} hex={color.hex} name={color.name} />
          )
          )
        }
      </div>
    </>
  )
}
