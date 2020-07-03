import React, { useState, useEffect, useRef } from 'react'

export const useFetch = ( url ) => {
    const isMounted = useRef(true);
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        setState({
            ...state,
            loading: true
        });
        
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                } else {
                    console.log('prevenimos el setState de un componente desmontado');    
                }
            })
    }, [url])

    return state;
}
