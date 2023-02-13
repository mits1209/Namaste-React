import { useState } from "react";

const Section = ({title, description, isVisible, setIsVisible}) => {
    return (
        <div className="border border-black p-2 m-2">
             <h3 className="font-bold text-xl">{title}</h3>
             {isVisible ?  (
            <>
            <button 
             onClick={()=> setIsVisible(false)} 
             className="cursor-pointer underline">
                Hide
                </button>
                <p>{description}</p>
                </>
                ) : (
                <button 
                onClick={()=> setIsVisible(true)} 
                className="cursor-pointer underline">
                Show
                </button>
                ) }
                
             
        </div>
       
    )
}


const Instamart = () => {
    const [visibleSection, setIsVisibleSection] = useState("about");
return (<div>
    <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
    <Section 
    title={"About Instamart"} 
    description={"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"}
    isVisible={visibleSection === "about"}
    setIsVisible={() => 
        setIsVisibleSection (visibleSection ? "about" : "false")}
    />
    <Section 
    title={"Team Instamart"} 
    description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"}
    isVisible={visibleSection === "team"}
    setIsVisible={() => 
        setIsVisibleSection ("team")}
    />
     <Section 
    title={"Career Instamart"} 
    description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"}
    isVisible={visibleSection === "career"}
    setIsVisible={() => 
        setIsVisibleSection ("career")}
   />
    <Section 
    title={"Product Instamart"} 
    description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"}
    isVisible={visibleSection === "product"}
    setIsVisible={() => 
        setIsVisibleSection ("product")}
   />
    <Section 
    title={"Details Instamart"} 
    description={"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"}
    isVisible={visibleSection === "details"}
    setIsVisible={() => 
        setIsVisibleSection ("details")}
   />

    {/* <AboutInstaMart />
    <DetailsofInstaMart/>
    <TeamInstamart/>
    <Product/>
    <Careers/> */}
</div>);
};
export default Instamart;