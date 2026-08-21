
const AppButton = ({caption, fx}) => {
  return (
    <div className="appButton" onClick={fx}>
      {caption || "Read more"}
    </div>
  )
}

export default AppButton;