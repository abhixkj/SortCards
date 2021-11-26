using CardSorting.Shared.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CardSorting.Controllers
{
    [ApiController]
    [Route("cards")]
    public class CardController : Controller
    {
        private readonly ICardService _cardService;

        public CardController(ICardService cardService)
        {
            _cardService = cardService;
        }

        [HttpPost]
        [Route("sort")]       
        public IActionResult Sort([FromBody] List<string> cardSortingRequest)
        {
            var sortedArray = _cardService.SortCards(cardSortingRequest);
            return Ok(sortedArray);
        }
    }
}
