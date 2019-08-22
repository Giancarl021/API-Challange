using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.Models;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Server.Controllers
{
    [Route("api/Pessoa")]
    [ApiController]
    public class PessoaController : ControllerBase
    {
        private readonly Context _context;

        public PessoaController(Context context)
        {
            _context = context;

            if (_context.Pessoas.Count() == 0)
            {
                _context.Pessoas.Add(new Pessoa
                {
                    Nome = "Jão",
                    Email = "jaojao@jao.com",
                    Nasc = "19/12/2019"
                });
                _context.SaveChanges();
            }

        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pessoa>>> GetPessoas()
        {
            return await _context.Pessoas.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Pessoa>> GetPessoa(long id)
        {
            Pessoa pessoa = await _context.Pessoas.FindAsync(id);
            if (pessoa == null)
            {
                return NotFound();
            }

            return pessoa;
        }

        [HttpPost]
        public async Task<ActionResult<Pessoa>> PostPessoa(Pessoa pessoa)
        {
            _context.Add(pessoa);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPessoa), new { id = pessoa.Id }, pessoa);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Pessoa>> PutPessoa(long id, Pessoa pessoa)
        {
            if(id != pessoa.Id)
            {
                return BadRequest();
            }

            _context.Entry(pessoa).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePessoa(long id) {
            Pessoa pessoa = await _context.Pessoas.FindAsync(id);
            if(pessoa == null)
            {
                return NotFound();
            }
            _context.Pessoas.Remove(pessoa);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}
