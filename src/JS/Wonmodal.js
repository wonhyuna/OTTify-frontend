import React from "react"
import "../CSS/Wonmodal.css"

const Wonmodal = props => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open} = props

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal Wonmodal" : "Wonmodal"}>
      {open ? (
        <main>
          {props.children}
        </main>
      ) : null}
    </div>
  )
}

export default Wonmodal;