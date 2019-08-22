using System;
using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class Pessoa
    {
        [Key]
        public long Id { get; set; }
        public String Nome { get; set; }
        public String Email { get; set; }
        public String Nasc { get; set; }
    }
}
