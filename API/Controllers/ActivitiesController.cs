//controller is the actual API so here you will find the definition of API calls and what happens when they are called

using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence; //Dependancy linking to the persistence layer

namespace API.Controllers
{
      public class ActivitiesController : BaseApiController
    {
        private readonly DataContext _context;
      
        public ActivitiesController(DataContext context)
        {
            _context = context;
         
        }
        [HttpGet] //Api/activities
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await _context.Activities.ToListAsync();
        }

        [HttpGet("{id}")] //Api/activities/sadasdas-dasdas-sdaa
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            return await _context.Activities.FindAsync(id);
        }
    }
}