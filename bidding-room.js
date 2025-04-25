// bidding-room.js
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Fetch jobs from in-memory store
        const jobs = window.jobStore.getJobs();
        const jobList = document.getElementById('job-list');

        if (jobs.length === 0) {
            // Placeholder stays as is
        } else {
            const placeholder = jobList.querySelector('.job-card-placeholder');
            if (placeholder) placeholder.remove();

            jobs.forEach(job => {
                const jobCard = document.createElement('div');
                jobCard.className = 'job-card';
                jobCard.innerHTML = `
                    <h2>${job.title}</h2>
                    <div class="job-image">
                        ${job.imagePath ? `<img src="${job.imagePath}" alt="Job Image">` : ''}
                    </div>
                    <p>${job.description}</p>
                    <div class="job-info">
                        <span class="views">Views: 0</span>
                        <span class="bid-count">Bids: 0</span>
                    </div>
                    <div class="bids-section">
                        <h3>Bids</h3>
                        <p>No bids yet.</p>
                    </div>
                    <div class="ratings-section">
                        <h3>Handyman Ratings</h3>
                        <p>Ratings coming soon.</p>
                    </div>
                `;
                jobList.appendChild(jobCard);
            });
        }
    } catch (err) {
        console.error('Failed to load jobs:', err);
    }
});