export const PlayerSpec = ({ image, title, subTitle }) => {
 const renderArea = document.getElementById('playerDataMusic')

 const contentPlayer = () => {
  return (
   <div style={{ display: 'flex', flexDirection: 'column' }}>
    <img src={image} />
    <h3>{title}</h3>
    <p>{subTitle}</p>
   </div>
  )
 }

 return () => (renderArea.innerHTML = contentPlayer)
}
