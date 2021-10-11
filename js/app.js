const cargoTogglerContainer = document.getElementById('cargo-toggler-container');
const cargoTogglerBtn = document.getElementById('cargo-toggler-btn')
const exportTogglerContainer = document.getElementById('export-toggler-container')
const exportTogglerBtn = document.getElementById('export-toggler-btn')
const cargoInsuranceTogglerContainer = document.getElementById('cargo-insurance-container')
const cargoInsuranceTogglerBtn = document.getElementById('cargo-insurance-btn')
const importCustomTogglerContainer = document.getElementById('import-custom-container')
const importCustomTogglerBtn = document.getElementById('import-custom-btn')
const transportTogglerContainer = document.getElementById('transport-container')
const transportTogglerBtn = document.getElementById('transport-btn')
const selectBx = document.getElementsByClassName('select-service-sub-bx')
const selectBxParent = document.getElementById('service-selection-bx')
const defaultBtnStyle = 'translateY(-50%) translateX(0%)'
const defaultContainerStyle = 'var(--tet-clr-dark)'
const transformedBtnStyle = 'translateY(-50%) translateX(140%)'
const transformedContainerStyle = 'var(--pri-clr)'
const totalDimensionBx = document.getElementById('total-dimension-bx')
const packageDetails = document.getElementById('package-details-bx')




selectBxParent.addEventListener('click', (e)=>{
    for (let i = 0; i < selectBx.length; i++) {

            
             selectBx[i].classList.remove('active');
             
             for (const item of selectBx[i].children) {
                 item.classList.remove('active')
             }
        
    }
    if (e.target.classList.contains('select-service-sub-bx')) {
        e.target.classList.add('active')

        for (const item of e.target.children) {
            item.classList.add('active')
        }
    }

    else if (e.target.classList.contains('sub-p')) {
        e.target.classList.add('active')
        e.target.nextElementSibling.classList.add('active')
        e.target.parentElement.classList.add('active')
    }

    else if (e.target.classList.contains('sub-i')) {
        e.target.classList.add('active')
        e.target.previousElementSibling.classList.add('active')
        e.target.parentElement.classList.add('active')
    }
})


// setting defualt styles in global scope
setDefStyles()


// dangerous cargo toggler
 cargoTogglerBtn.addEventListener('click', ()=>toggler(cargoTogglerBtn,cargoTogglerContainer))
 
 // export forwarding toggler 
 exportTogglerBtn.addEventListener('click', ()=>toggler(exportTogglerBtn, exportTogglerContainer))
 
 //  cargo insurance toggler
 cargoInsuranceTogglerBtn.addEventListener('click', ()=>toggler(cargoInsuranceTogglerBtn, cargoInsuranceTogglerContainer))

 //  import custom toggler
 importCustomTogglerBtn.addEventListener('click', ()=>toggler(importCustomTogglerBtn, importCustomTogglerContainer))
 
 //  transport toggler
 transportTogglerBtn.addEventListener('click', ()=>toggler(transportTogglerBtn, transportTogglerContainer))


 // cargo details functionality
 packageDetails.addEventListener('click', ()=>{
     
     packageDetails.style.backgroundColor = '#fff'
     packageDetails.style.color = transformedContainerStyle
     
     totalDimensionBx.style.backgroundColor = 'var(--tet-clr)'
     totalDimensionBx.style.color = defaultContainerStyle
     
    })
    
    totalDimensionBx.addEventListener('click', ()=>{
        
        packageDetails.style.backgroundColor = 'var(--tet-clr)'
        packageDetails.style.color = defaultContainerStyle
        
        totalDimensionBx.style.backgroundColor = '#fff'
        totalDimensionBx.style.color = transformedContainerStyle
        
    })
    
    
    // TOGGLER FUNCTIONALITY
    function toggler(togglerBtn, togglerContainer) {
        if (togglerBtn.style.transform === defaultBtnStyle && togglerContainer.style.backgroundColor === defaultContainerStyle) {
            togglerBtn.style.transform = transformedBtnStyle
            togglerContainer.style.backgroundColor = transformedContainerStyle
        }
        else{
            togglerBtn.style.transform = defaultBtnStyle
            togglerContainer.style.backgroundColor = defaultContainerStyle  
        }
    }
    
    
    // DEFAULT STYLES FUNCTIONALITY
    function setDefStyles() {
        cargoTogglerBtn.style.transform = defaultBtnStyle 
        cargoTogglerContainer.style.backgroundColor = defaultContainerStyle
        
        exportTogglerBtn.style.transform = defaultBtnStyle 
        exportTogglerContainer.style.backgroundColor = defaultContainerStyle
        
        cargoInsuranceTogglerBtn.style.transform = defaultBtnStyle 
        cargoInsuranceTogglerContainer.style.backgroundColor = defaultContainerStyle
        
        importCustomTogglerBtn.style.transform = defaultBtnStyle 
        importCustomTogglerContainer.style.backgroundColor = defaultContainerStyle
        
        transportTogglerBtn.style.transform = defaultBtnStyle 
        transportTogglerContainer.style.backgroundColor = defaultContainerStyle
    }










 
 
 




 

