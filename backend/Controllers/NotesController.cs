using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace NotesApi.Controllers;

[ApiController]
[Route("notes")]
public class NotesController : ControllerBase
{
    private readonly AppDbContext _context;

    public NotesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Note>>> GetAll()
    {
        return Ok(await _context.Notes.OrderByDescending(n => n.CreatedAt).ToListAsync());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Note>> GetById(int id)
    {
        var note = await _context.Notes.FindAsync(id);
        if (note == null) return NotFound(new { message = "Нотатку не знайдено" });
        return Ok(note);
    }

    [HttpPost]
    public async Task<ActionResult<Note>> Create(Note note)
    {
        note.CreatedAt = DateTime.UtcNow;
        _context.Notes.Add(note);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetById), new { id = note.Id }, note);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, Note updatedNote)
    {
        var note = await _context.Notes.FindAsync(id);
        if (note == null) return NotFound(new { message = "Нотатку не знайдено" });

        note.Title = updatedNote.Title;
        note.Content = updatedNote.Content;

        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var note = await _context.Notes.FindAsync(id);
        if (note == null) return NotFound(new { message = "Нотатку не знайдено" });

        _context.Notes.Remove(note);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}