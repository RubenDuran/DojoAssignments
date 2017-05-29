from django.shortcuts import render, redirect
from django.db.models import Count
from .models import League, Team, Player
from .import team_maker

def index(request):

	x = Player.objects.annotate(count=Count('all_teams__team_name'))
	teams_per_player = []
	for player in x:
		name = player.first_name + player.last_name
		player_team_count= [player.count, name]
		teams_per_player.append(player_team_count)

	for player in teams_per_player:
		print(player[0])
		print(player[1])

	context = {
		"baseball_leagues": League.objects.filter(sport='Baseball'),
		"atlantic_soccer_teams": Team.objects.filter(league__name='Atlantic Soccer Conference'),
		"penguin_players": Player.objects.filter(curr_team__team_name='Penguins'),
		"icbc_players": Player.objects.filter(curr_team__league__name='International Collegiate Baseball Conference'),
		"lopez_players": Player.objects.filter(curr_team__league__name='American Conference of Amateur Football', last_name='Lopez'),
		"football_players": Player.objects.filter(curr_team__league__sport='Football'),
		"sophia_teams": Team.objects.filter(curr_players__first_name='Sophia'),
		"sophia_leagues": League.objects.filter(teams__curr_players__first_name='Sophia'),
		"flores_players": Player.objects.filter(last_name = 'Flores').exclude(curr_team__team_name='Roughriders'),
		'sam_team': Team.objects.filter(curr_players__first_name='Samuel',curr_players__last_name='Evans')|Team.objects.filter(all_players__first_name='Samuel',all_players__last_name='Evans'),
		'tigercat_players': Player.objects.filter(all_teams__team_name='Tiger-Cats')|Player.objects.filter(curr_team__team_name='Tiger-Cats'),
		'old_vikings_players': Player.objects.filter(all_teams__team_name='Vikings').exclude(curr_team__team_name='Vikings'),
		'gray_teams': Team.objects.filter(all_players__first_name='Jacob',all_players__last_name='Gray' ).exclude(team_name='Colts'),
		'twelve_plus_teams': Team.objects.annotate(count=Count('all_players__first_name')),
		'player_numteams':teams_per_player.sort(reverse=True),



		# "women_leagues": League.objects.filter(name__contains="Womens"),
		# "hockey_leagues": League.objects.filter(sport__contains="Hockey"),
		# "non_football_leagues": League.objects.exclude(sport="Football"),
		# "conference_leagues": League.objects.filter(name__contains="Conference"),
		# "atlantic_leagues": League.objects.filter(name__contains="Atlantic"),
		# "dallas_team": Team.objects.filter(location__contains='Dallas'),
		# "raptor_team": Team.objects.filter(team_name__contains='Raptors'),
		# "city_team": Team.objects.filter(location__contains='City'),
		# "t_team": Team.objects.filter(team_name__startswith='T'),
		# "location_team": Team.objects.all().order_by("location"),
		# "alph_team": Team.objects.all().order_by("-team_name"),
		# "coop_players": Player.objects.filter(last_name="Cooper"),
		# "josh_players": Player.objects.filter(first_name="Joshua"),
		# "not_josh_players": Player.objects.filter(last_name="Cooper").exclude(first_name="Joshua"),
		# "alorwyatt": Player.objects.filter(first_name="Alexander")|Player.objects.filter(first_name="Wyatt"),
		# "leagues": League.objects.all(),
		# "teams": Team.objects.all(),
		# "players": Player.objects.all(),

	    }
	return render(request, "leagues/index.html", context)

def make_data(request):
	team_maker.gen_leagues(10)
	team_maker.gen_teams(50)
	team_maker.gen_players(200)

	return redirect("index")
