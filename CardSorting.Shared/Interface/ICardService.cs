using System;
using System.Collections.Generic;
using System.Text;

namespace CardSorting.Shared.Interface
{
    public interface ICardService
    {
        public string[] SortCards(List<string> cards);
    }
}
