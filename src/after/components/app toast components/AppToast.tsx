import React from 'react'

type POSITION = {
  vertical: string;
  horizontal: string;

}

type Props = {
  position : POSITION;
  message: string;
  severity: string;
}

const AppToast = (props: Props) => {
  return (
    <div>AppToast</div>
  )
}

export default AppToast