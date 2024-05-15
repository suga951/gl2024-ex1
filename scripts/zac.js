let P_video=document.getElementById("Passive_video")
let Q_video=document.getElementById("Q_video")
let W_video=document.getElementById("W_video")
let E_video=document.getElementById("E_video")
let P_eplication=document.getElementById("P_explication")
let Q_eplication=document.getElementById("Q_explication")
let W_eplication=document.getElementById("W_explication")
let E_eplication=document.getElementById("E_explication")
let R_eplication=document.getElementById("R_explication")


function passive_hide(){
    if(P_eplication.style.display==="none" && P_video.style.display==="none"){
        P_video.style.display="block";
        P_eplication.style.display="block";
        Q_video.style.display="none"
        Q_eplication.style.display="none"
        W_video.style.display="none"
        W_eplication.style.display="none"
        E_video.style.display="none"
        E_eplication.style.display="none"
        R_video.style.display="none"
        R_eplication.style.display="none"
    }
    else{
        Q_video.style.display="none"
        Q_eplication.style.display="none"
    }
}
function Q_hide(){
    if(Q_eplication.style.display==="none" && Q_video.style.display==="none"){
        P_video.style.display="none"
        P_eplication.style.display="none"
        Q_video.style.display="block"
        Q_eplication.style.display="block"
        W_video.style.display="none"
        W_eplication.style.display="none"
        E_video.style.display="none"
        E_eplication.style.display="none"
        R_video.style.display="none"
        R_eplication.style.display="none"
    }
    else{
        W_video.style.display="none"
        W_eplication.style.display="none"
    }
}
function W_hide(){
    if(W_eplication.style.display==="none" && W_video.style.display==="none"){
        W_video.style.display="block";
        W_eplication.style.display="block";
        E_video.style.display="none"
        E_eplication.style.display="none"
        R_video.style.display="none"
        R_eplication.style.display="none"
        P_video.style.display="none"
        P_eplication.style.display="none"
        Q_video.style.display="none"
        Q_eplication.style.display="none"
    }
    else{
        E_video.style.display="none"
        E_eplication.style.display="none"
    }
}
function E_hide(){
    if(E_eplication.style.display==="none" && E_video.style.display==="none"){
        E_video.style.display="block";
        E_eplication.style.display="block";
        R_video.style.display="none"
        R_eplication.style.display="none"
        P_video.style.display="none"
        P_eplication.style.display="none"
        Q_video.style.display="none"
        Q_eplication.style.display="none"
        W_video.style.display="none"
        W_eplication.style.display="none"
    }
    else{
        R_video.style.display="none"
        R_eplication.style.display="none"

    }
}
function R_hide(){
    if(R_eplication.style.display==="none" && R_video.style.display==="none"){
        R_video.style.display="block";
        R_eplication.style.display="block";
        P_video.style.display="none"
        P_eplication.style.display="none"
        Q_video.style.display="none"
        Q_eplication.style.display="none"
        W_video.style.display="none"
        W_eplication.style.display="none"
        E_video.style.display="none"
        E_eplication.style.display="none"
    }
    else{
        P_video.style.display="none"
        P_eplication.style.display="none"
    }

}