using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace to_do_backend.Data.Migrations
{
    /// <inheritdoc />
    public partial class Todov4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UpdatedAt",
                table: "Todos",
                newName: "UpdatedOn");

            migrationBuilder.RenameColumn(
                name: "CreatedAt",
                table: "Todos",
                newName: "CreatedOn");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UpdatedOn",
                table: "Todos",
                newName: "UpdatedAt");

            migrationBuilder.RenameColumn(
                name: "CreatedOn",
                table: "Todos",
                newName: "CreatedAt");
        }
    }
}
