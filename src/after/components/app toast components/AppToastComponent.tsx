import AppToast from "./AppToast";

type AppToastProps = {
  toastMsg: string;
  toastSev: string;
}


const AppToastComponent = ({ toastMsg, toastSev }: AppToastProps) => (
  <AppToast
    position={{ vertical: "bottom", horizontal: "center" }}
    message={toastMsg}
    severity={toastSev}
  />
);

export default AppToastComponent;