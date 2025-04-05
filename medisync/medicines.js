
        function manageAppointments() {
            const dateInput = document.getElementById('manage');
            const appointmentList = document.getElementById('appointment-list');

            if (!dateInput.value) {
                alert("Please select a date");
                return;
            }

            // Create a new panel (div) for the appointment
            const appointmentItem = document.createElement('div');
            appointmentItem.classList.add('appointment-item');

            // Display the selected date
            appointmentItem.innerHTML = `<p>Appointment: ${dateInput.value}</p>`;

            // Add a delete button to remove appointments
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "Remove";
            deleteBtn.onclick = function () {
                appointmentList.removeChild(appointmentItem);
            };

            appointmentItem.appendChild(deleteBtn);
            appointmentList.appendChild(appointmentItem);

            // Clear the input field after adding
            dateInput.value = "";
        }

        function uploadPrescription() {
            const fileInput = document.getElementById('medpres');
            const fileNameDisplay = document.getElementById('file-name');
            const prescriptionList = document.getElementById('prescription-item');
            
            if (fileInput.files.length === 0) {
                alert("Please select a file");
                return;
            }
            
            const file = fileInput.files[0];
            fileNameDisplay.textContent = file.name;
            
            const fileElement = document.createElement('div');
            fileElement.classList.add('prescription-item');
            fileElement.innerHTML = `<p>${file.name}</p>`;
            
            if (file.type.startsWith('image/')) {
                const img = document.createElement('img');
                img.src = URL.createObjectURL(file);
                img.onload = () => URL.revokeObjectURL(img.src);
                fileElement.appendChild(img);
            } else {
                fileElement.innerHTML += `<p>(Non-image file uploaded)</p>`;
            }
            
            prescriptionList.appendChild(fileElement);
        }