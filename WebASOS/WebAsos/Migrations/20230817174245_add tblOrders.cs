using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace WebAsos.Migrations
{
    /// <inheritdoc />
    public partial class addtblOrders : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "tblOrders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    FullName = table.Column<string>(type: "text", nullable: false),
                    UserId = table.Column<int>(type: "integer", nullable: false),
                    CreditCardId = table.Column<int>(type: "integer", nullable: false),
                    AddressId = table.Column<int>(type: "integer", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    IsDeleted = table.Column<bool>(type: "boolean", nullable: false),
                    DateCreated = table.Column<DateTime>(type: "timestamp without time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblOrders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_tblOrders_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_tblOrders_tblAddresses_AddressId",
                        column: x => x.AddressId,
                        principalTable: "tblAddresses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_tblOrders_tblCreditCard_CreditCardId",
                        column: x => x.CreditCardId,
                        principalTable: "tblCreditCard",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "OrderedProducts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Count = table.Column<int>(type: "integer", nullable: false),
                    OrderId = table.Column<int>(type: "integer", nullable: false),
                    ProductId = table.Column<int>(type: "integer", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    IsDeleted = table.Column<bool>(type: "boolean", nullable: false),
                    DateCreated = table.Column<DateTime>(type: "timestamp without time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderedProducts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrderedProducts_tblOrders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "tblOrders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OrderedProducts_tblProducts_ProductId",
                        column: x => x.ProductId,
                        principalTable: "tblProducts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrderedProducts_OrderId",
                table: "OrderedProducts",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderedProducts_ProductId",
                table: "OrderedProducts",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_tblOrders_AddressId",
                table: "tblOrders",
                column: "AddressId");

            migrationBuilder.CreateIndex(
                name: "IX_tblOrders_CreditCardId",
                table: "tblOrders",
                column: "CreditCardId");

            migrationBuilder.CreateIndex(
                name: "IX_tblOrders_UserId",
                table: "tblOrders",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OrderedProducts");

            migrationBuilder.DropTable(
                name: "tblOrders");
        }
    }
}
