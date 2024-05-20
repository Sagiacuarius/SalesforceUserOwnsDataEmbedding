import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class ReportDropdown extends NavigationMixin(LightningElement) {
    selectedReport = '';
    reportOptions = [
        { label: 'Reporte 1', value: 'e14c47ac-ba46-4699-be85-33df88b51f1' },
        { label: 'Reporte 2', value: 'report2' },
        // Agrega más opciones según sea necesario
    ];

    handleReportSelection(event) {
        this.selectedReport = event.detail.value;
        // Navegar a la página correspondiente cuando se selecciona un reporte
        this.navigateToReportPage(event.detail.value);
    }

    navigateToReportPage(reportId) {
        // URL base de la página del informe
        let baseUrl = "https://salesforce-user-owns-data-embedding.vercel.app/index.html";
        
        // Concatenar reportId como un parámetro en la URL
        let urlWithParams = `${baseUrl}?reportId=${reportId}`;
        
        // Utilizar NavigationMixin para navegar a la página correspondiente
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: urlWithParams
            }
        });
    }
    
}
