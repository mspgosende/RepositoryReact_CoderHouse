import React, { createContext, useState, useContext } from "react";

const appContext = createContext({});
export const useAppContext = () => useContext(appContext); 

export const AppContextProvider = ({ children }) => {
    const DESIGNERS = [
        {
            name: 'Versace',
            id: 0,
            imageSrc: 'https://content.knightfrank.com/blog/2018/4/8845db35-1958-4974-8a68-90bbd9e44755/iv-18-versace-1-th.jpg', 
            videoSrc: 'https://youtu.be/hoKDrFyQDy0',
        },
        {
            name: 'Vivienne Westwood',
            id: 1,
            imageSrc: 'https://th.bing.com/th/id/R.844351ced31434f516e9438f91be27fd?rik=63Zb%2bvDt8HDv0g&riu=http%3a%2f%2fd3hp8xnxb3lun4.cloudfront.net%2fwp-content%2fuploads%2f2017%2f08%2fThe-Rake-Vivienne-Westwood-featuredx.jpg&ehk=ZHVDQTnwfQ7GhyYqKCpONujF4jLx614hWjXKt7C6vDo%3d&risl=&pid=ImgRaw&r=0',
            videoSrc: 'https://youtu.be/hoKDrFyQDy0',
        },
        {
            name: 'Yohiji Yamamoto',
            id: 2,
            imageSrc: 'https://i.pinimg.com/originals/d0/fe/3b/d0fe3b362c496f727a5123a0c54ab591.jpg',
            videoSrc: 'https://youtu.be/hoKDrFyQDy0',
        }
    ];
    return(
        <appContext.Provider value={
            {
                DESIGNERS
            }
        }>
            {children}
        </appContext.Provider>
     );
     

}
