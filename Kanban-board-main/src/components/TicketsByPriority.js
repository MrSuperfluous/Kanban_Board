import React from 'react';
import Card from './Card'; 
const TicketsByPriority = ({ tickets, users }) => {
    
    const priorityMapping = {
        4: 'Urgent',
        3: 'High',
        2: 'Medium',
        1: 'Low',
        0: 'No priority'
    };
    const priorities = [4, 3, 2, 1, 0]; 
    return (
        <div className="columns" style={{ display: 'flex', gap: '20px' }}>
            {priorities.map((priority) => {
                const filteredTickets = tickets.filter(ticket => ticket.priority === priority);
                return (
                    <div className="column" key={priority} style={{ flex: 1 }}>
                        <h3 style={{ display: 'flex', alignItems: 'center' }}>
                            {priorityMapping[priority]} ({filteredTickets.length})
                        </h3>
                        {filteredTickets.map(ticket => (
                            <Card 
                                key={ticket.id} 
                                id={ticket.id} 
                                title={ticket.title} 
                                userId={ticket.userId} 
                                users={users} 
                            />
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

export default TicketsByPriority;
