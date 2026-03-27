document.addEventListener('DOMContentLoaded', () => {
    /* --- Skills Cloud Magnetic Repulsion & Tilt Effect --- */
    const skillsCloud = document.querySelector('.skills-cloud');
    if (skillsCloud) {
        const tags = skillsCloud.querySelectorAll('.tag');
        
        skillsCloud.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            tags.forEach(tag => {
                const rect = tag.getBoundingClientRect();
                const tagCenterX = rect.left + rect.width / 2;
                const tagCenterY = rect.top + rect.height / 2;
                
                const deltaX = mouseX - tagCenterX;
                const deltaY = mouseY - tagCenterY;
                const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                
                // Radius of effect
                const maxDistance = 180; 
                
                if (distance < maxDistance) {
                    const force = (maxDistance - distance) / maxDistance;
                    
                    // Push effect (away from cursor)
                    const pushX = -(deltaX / distance) * force * 40; 
                    const pushY = -(deltaY / distance) * force * 40;
                    
                    // Tilt/Bascule effect
                    const tiltX = (deltaY / distance) * force * 30; // deg
                    const tiltY = -(deltaX / distance) * force * 30; // deg
                    
                    tag.style.transform = `translate(${pushX}px, ${pushY}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${1 + force * 0.15})`;
                    tag.style.zIndex = Math.round(force * 10);
                    tag.style.boxShadow = `0 ${5 + force*15}px ${10 + force*20}px rgba(0,0,0,${0.3 + force*0.3})`;
                } else {
                    tag.style.transform = 'translate(0, 0) rotateX(0) rotateY(0) scale(1)';
                    tag.style.zIndex = 1;
                    tag.style.boxShadow = 'none';
                }
            });
        });

        skillsCloud.addEventListener('mouseleave', () => {
            tags.forEach(tag => {
                tag.style.transform = 'translate(0, 0) rotateX(0) rotateY(0) scale(1)';
                tag.style.zIndex = 1;
                tag.style.boxShadow = 'none';
            });
        });
    }
});
