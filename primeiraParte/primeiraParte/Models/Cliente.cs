using System;
using System.Collections.Generic;

namespace primeiraParte.Models
{
    public partial class Cliente
    {
        public int IdCliente { get; set; }
        public string NomeCliente { get; set; }
        public string ClienteEndereco { get; set; }
        public int IdCidade { get; set; }

        public virtual Cidade IdCidadeNavigation { get; set; }
    }
}
