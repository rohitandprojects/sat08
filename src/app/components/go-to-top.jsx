"use client";
import { useLenis } from '@studio-freight/react-lenis';
import { useEffect, useRef } from "react";
export default function GoToTop() {
    const initialized = useRef(false);
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
       //console.log(scroll)
    });
    useEffect(()=>{
        lenis.scrollTo(0, { immediate: true });
          if(!initialized.current){
              initialized.current = true;    
          }
        }
    )    
}