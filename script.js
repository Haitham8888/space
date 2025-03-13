document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // جمع البيانات من النموذج
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const passengers = document.getElementById('passengers').value;
    const travelClass = document.getElementById('class').value;

    // التحقق من صحة المدخلات
    if (from === to) {
        alert('لا يمكن أن تكون وجهة المغادرة والوصول متطابقة');
        return;
    }

    // التحقق من التاريخ
    const selectedDate = new Date(date);
    const today = new Date();
    if (selectedDate < today) {
        alert('الرجاء اختيار تاريخ مستقبلي');
        return;
    }

    // محاكاة البحث عن الرحلات
    displayResults(from, to, date, passengers, travelClass);
});

function displayResults(from, to, date, passengers, travelClass) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.style.display = 'block';
    
    // محاكاة نتائج البحث
    const flights = [
        { airline: 'الخطوط السعودية', price: 1200, time: '09:00' },
        { airline: 'طيران الإمارات', price: 1400, time: '11:30' },
        { airline: 'الخطوط القطرية', price: 1300, time: '14:15' }
    ];

    let html = '<h2>الرحلات المتوفرة</h2>';
    flights.forEach(flight => {
        const totalPrice = flight.price * parseInt(passengers);
        html += `
            <div class="flight-card">
                <h3>${flight.airline}</h3>
                <p>وقت المغادرة: ${flight.time}</p>
                <p>السعر للشخص: ${flight.price} ريال</p>
                <p>السعر الإجمالي: ${totalPrice} ريال</p>
                <button onclick="bookFlight('${flight.airline}', ${totalPrice})">احجز الآن</button>
            </div>
        `;
    });

    resultsDiv.innerHTML = html;
}

function bookFlight(airline, price) {
    alert(`تم حجز رحلتك على ${airline} بنجاح!\nالمبلغ الإجمالي: ${price} ريال`);
}
