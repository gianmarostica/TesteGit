using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace primeiraParte.Models
{
    public partial class clienteAPIContext : DbContext
    {
        public clienteAPIContext()
        {
        }

        public clienteAPIContext(DbContextOptions<clienteAPIContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Cidade> Cidade { get; set; }
        public virtual DbSet<Cliente> Cliente { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseNpgsql(@"Server=localhost;Database=clienteAPI;Port=5432;User Id=postgres;Password=root;
			");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.4-servicing-10062");

            modelBuilder.Entity<Cidade>(entity =>
            {
                entity.HasKey(e => e.IdCidade)
                    .HasName("cidade_pk");

                entity.ToTable("cidade");

                entity.Property(e => e.IdCidade).HasColumnName("id_cidade");

                entity.Property(e => e.NomeCidade)
                    .IsRequired()
                    .HasColumnName("nome_cidade")
                    .HasMaxLength(30);
            });

            modelBuilder.Entity<Cliente>(entity =>
            {
                entity.HasKey(e => e.IdCliente)
                    .HasName("cliente_pk");

                entity.ToTable("cliente");

                entity.Property(e => e.IdCliente).HasColumnName("id_cliente");

                entity.Property(e => e.ClienteEndereco)
                    .IsRequired()
                    .HasColumnName("cliente_endereco")
                    .HasMaxLength(60);

                entity.Property(e => e.IdCidade).HasColumnName("id_cidade");

                entity.Property(e => e.NomeCliente)
                    .IsRequired()
                    .HasColumnName("nome_cliente")
                    .HasMaxLength(60);

                entity.HasOne(d => d.IdCidadeNavigation)
                    .WithMany(p => p.Cliente)
                    .HasForeignKey(d => d.IdCidade)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("cidade_cliente_fk");
            });
        }
    }
}
