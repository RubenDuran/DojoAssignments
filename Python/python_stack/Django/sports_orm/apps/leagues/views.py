from django.shortcuts import render, redirect
from .models import League, Team, Player

from . import team_maker

def index(request):

	# league_names = League.objects.filter(sport='baseball')
	# for name in league_names.name:
	# 	print("QUERY RESULT:",name)
	b=League.objects.filter(name__contains="Atlantic")
	for a in b:
		print(a.name)
		# print(a.league)
	# a = League.objects.get(id = 2)
	# print(a.name)
	# print(a.sport)


	context = {
		"baseball_leagues": League.objects.filter(sport='Baseball'),
		"women_leagues": League.objects.filter(name__contains="Womens"),
		"hockey_leagues": League.objects.filter(sport__contains="Hockey"),
		"non_football_leagues": League.objects.exclude(sport="Football"),
		"conference_leagues": League.objects.filter(name__contains="Conference"),
		"atlantic_leagues": League.objects.filter(name__contains="Atlantic"),
		"dallas_team": Team.objects.filter(location__contains='Dallas'),
		"raptor_team": Team.objects.filter(team_name__contains='Raptors'),
		"city_team": Team.objects.filter(location__contains='City'),
		"t_team": Team.objects.filter(team_name__startswith='T'),
		"location_team": Team.objects.all().order_by("location"),
		"alph_team": Team.objects.all().order_by("-team_name"),
		"coop_players": Player.objects.filter(last_name="Cooper"),
		"josh_players": Player.objects.filter(first_name="Joshua"),
		"not_josh_players": Player.objects.filter(last_name="Cooper").exclude(first_name="Joshua"),
		"alorwyatt": Player.objects.filter(first_name="Alexander")|Player.objects.filter(first_name="Wyatt"),
		"leagues": League.objects.all(),
		"teams": Team.objects.all(),
		"players": Player.objects.all(),
	}
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")
