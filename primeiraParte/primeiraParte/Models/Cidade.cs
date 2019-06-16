using System;
using System.Collections.Generic;

namespace primeiraParte.Models
{
    public partial class Cidade
    {
        public Cidade()
        {
            Cliente = new HashSet<Cliente>();
        }

        public int IdCidade { get; set; }
        public string NomeCidade { get; set; }

        public virtual ICollection<Cliente> Cliente { get; set; }
    }
}
