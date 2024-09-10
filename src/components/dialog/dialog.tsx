import React from "react";

interface DialogProps{
    isDialog: boolean;
    setIsDialog: (value: boolean)=>void
    children: React.ReactNode
}

export const Dialog = ({isDialog, children, setIsDialog}: DialogProps) =>{

    const handleClose = () =>{
        setIsDialog(false)
    }
    const handleDialogClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };
   if(isDialog){
       return (
           <div className={"dialog_wrapper"} onClick={handleClose}>
               <div className={"dialog"} onClick={handleDialogClick}>
                   {children}

               </div>
           </div>
       )
   }
}